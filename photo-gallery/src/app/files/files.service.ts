import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FilesService {
    constructor(private httpClient: HttpClient){}
    options={
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    public post (url:string, file:any) : Observable<any>{
        return this.httpClient.post<any>(url, file);
    }
}