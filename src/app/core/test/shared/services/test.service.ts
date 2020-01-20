import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient) { }

    get() {
        const endpoint = 'recipe';
        return this.http.get(endpoint);
    }

    getOne(categoryId) {
        const endpoint = 'recipe/' + categoryId;
        return this.http.get(endpoint);
    }
}
