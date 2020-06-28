

import { Injectable } from '@angular/core';

import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable()
export class freeApiService{

    constructor ( private http: HttpClient ){

    };

    getComments(): Observable<any>{
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
    getCommentByParameter(id): Observable<any>{
        let params1=new HttpParams().set('userId',id);
        return this.http.get('https://jsonplaceholder.typicode.com/posts',{params:params1})
    }

}