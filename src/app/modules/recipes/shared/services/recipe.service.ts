import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    constructor(private http: HttpClient) { }

    get(): any {
        const endpoint = 'recipe';
        return this.http.get(endpoint);
    }

    one(categoryId: string): any {
        const endpoint = 'recipe/' + categoryId;
        return this.http.get(endpoint);
    }
}
