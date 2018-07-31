
import { HttpClient as H, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClient {

    public headers : HttpHeaders;
    public token : string;

    constructor(
        public http : H,
    ){
        
        
    }

    /** 
     * Set default headers used in every request. 
    */
    updateHeaders () {
        this.token = this.getToken();
        this.headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.token)
    }

    /**
     * Overrides the get method in HTTP class.
     * @param url 
     */
    public get<T>(url) {
        this.updateHeaders()
        return this.http.get<T>(url, {
          headers: this.headers
        });
      }
    
    /**
     * Overrides the post method in HTTP class
     * @param url 
     * @param data 
     */
    public post<T>(url, data, files? : boolean) {
      if(!files) {
        this.updateHeaders();      
      }
      else {
        this.token = this.getToken();
        this.headers = new HttpHeaders().set('Content-Type', 'application/form-data')
          .set('Authorization', 'Bearer ' + this.token);
      }
      return this.http.post<T>(url, data, {
        headers: this.headers
      });
    }

    /**
     * Override made for delete method in http Class
     * @param url 
     * @param data 
     */
    public delete<T>(url, data) {
      this.updateHeaders();
      return this.http.delete<T>(url, {
        headers: this.headers,
        params: data
      });
    }

    /**
     * Override made for delete method in http Class
     * @param url 
     * @param data 
     */
    public put<T>(url, data) {
      this.updateHeaders();
      return this.http.put<T>(url, {
        headers: this.headers,
        params: data
      });
    }

    /**
     * Override to the request method in HttpClient, this method is used when files are sent in the request.
     * @param url 
     * @param data 
     */
    public request<T>(url, data) : Observable<T> {
      this.token = this.getToken();
        this.headers = new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.token);
        this.headers.delete("Content-Type");
        return this.http.request<T>(
          'POST', url, {headers : this.headers, body: data, observe: 'body'}
        )
    }


    /** 
     * Obtains the session token from session storage.
    */
   getToken(){
    if(sessionStorage.sessionToken) {
        return sessionStorage.sessionToken;
      }     
      return "";
    }   

}