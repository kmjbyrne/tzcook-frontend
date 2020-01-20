import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { GetResponse } from '../interface/get-response';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    private user = new BehaviorSubject<User>(null);
    private localUser: any;
    constructor(private http: HttpClient) {

    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    updateLoggedInStatus(value: boolean) {
        this.loggedIn.next(value);
    }

    setUserData(user: User) {
        this.user.next(user);
    }

    getUserData() {
        return this.localUser;
    }

    userData() {
        return this.user.asObservable();
    }

    fetch() {
        const token = this.getToken();
        const payload = { token };
        return this.http.post('user/confirm', payload);
    }

    authenticate(user: any) {
        const endpoint = 'user/authenticate';
        return this.http.post(endpoint, user);
    }

    confirm() {
        const token = this.getToken();
        if (token != null) {
            const payload = { token };
            return this.http.post<GetResponse>('user/confirm', payload).subscribe(resp => {
                this.setUserData(resp.data);
                this.localUser = resp.data;
                console.log(resp);
                return resp;
            });
        }
        return this.localUser;
    }

    updatePassword(old: string, newPhrase: string, confirm: string) {
        const endpoint = `user/${this.localUser.id}/update-password`;
        return this.http.put<GetResponse>(endpoint, { old, newPhrase, confirm });
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token') || null;
    }

    purgeToken() {
        this.loggedIn.next(false);
        localStorage.clear();
    }

    logout(): void {
        this.localUser = null;
    }
}
