import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CategoryService {
    constructor(private httpClient: HttpClient) { }

    getCategory():Observable<any>{
        return this.httpClient.get('http://192.168.0.102:8080/api/category');
        // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/5')
    }

}