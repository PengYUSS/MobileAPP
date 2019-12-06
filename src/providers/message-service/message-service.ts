//import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {

  private urlc74: string = "http://127.0.0.1:3000/api/gallery/c74";
  private urlc75: string = "http://127.0.0.1:3000/api/gallery/c75";
  private urlc28: string = "http://127.0.0.1:3000/api/gallery/c28";
  private urlimage: string = "http://127.0.0.1:3000/api/getimage/";

  constructor(private http: Http) {
    console.log('Hello MessageServiceProvider Provider');
  }

  getMessagesc74() {
    return this.http.get(this.urlc74)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  getMessagesc75() {
    return this.http.get(this.urlc75)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  getMessagesc28() {
    return this.http.get(this.urlc28)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  getImages() {
    return this.http.get(this.urlimage)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
