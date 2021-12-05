import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ProductService {

    constructor(private httpClient: HttpClient) { }

    getProduct(category_id:string):Observable<any>{
        return this.httpClient.get('http://192.168.0.102:8080/api/products/'+category_id);
        // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/5')
    }

}