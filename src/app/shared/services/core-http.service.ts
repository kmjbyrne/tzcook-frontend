import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoreHttpService {

    constructor() { }
}
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Resource } from '../models/resource';
import { GetResponse } from '../interface/get-response';

export class CoreHttpResourceService<T extends any> {

    constructor(
        private http: HttpClient,
        private url: string,
        private endpoint: string
    ) { }

    private getEndpoint(id?: string | number) {
        if (id === undefined) {
            return `${this.url}/${this.endpoint}`;
        }
        return `${this.url}/${this.endpoint}/${id}`;
    }

    public get(): Observable<GetResponse>;
    public get(resourceId: number | string): Observable<GetResponse>;
    public get(resourceId?: string | number): Observable<GetResponse> {
        return this.http.get(this.getEndpoint(resourceId)).pipe(
            map((resp: any) => resp as GetResponse)
        );
    }

    public post(data: T): any {
        return this.http.post(this.getEndpoint(), data).pipe(
            map((resp: any) => resp as any)
        );
    }

    public put(id: string, data: T): any {
        return this.http.put(this.getEndpoint(id), data).pipe(
            map((resp: any) => resp as any)
        );
    }

    public delete(id: string): any {
        return this.http.delete(this.getEndpoint(id)).pipe(
            map((resp: any) => resp as any)
        );
    }
}