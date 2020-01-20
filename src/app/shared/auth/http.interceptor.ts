import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService,
        private router: Router,
        private toast: ToastrService
    ) {
        this.toast.toastrConfig.preventDuplicates = true;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.auth.getToken() || '';

        if (token === null) {
            const response = {
                code: 403,
                message: 'Your log in has expired. Returning to log in.',
                title: 'Log in expired'
            };
            this.router.navigate(['/']);
            return throwError(response);
        }

        const url = environment.api + request.url;
        let contentType = 'application/json';

        if (request.headers.get('Content-Type')) {
            contentType = request.headers.get('Content-Type');
        }
        request = request.clone({
            url,
            setHeaders: {
                // 'Content-Type': contentType,
                API_AUTHORIZATION: token
            }
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log(event, 'test');
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                this.reportError(error);
                return throwError(error);
            })
        );
    }

    reportError(error: any) {
        const response = {
            code: undefined,
            message: undefined,
            title: undefined
        };
        if (error.status === 0) {
            response.title = 'Connection Error';
            response.message = 'Unexpected server issue has occured. Contact support if issue persists.';
            this.toast.error(response.message, response.title);
        }

        if (error.status === 403) {
            response.title = 'Permissions Error';
            response.message = 'You do not have access to view this page. Please log in again.';
            this.toast.warning(response.message, response.title);
        }
        return response;
    }
}
