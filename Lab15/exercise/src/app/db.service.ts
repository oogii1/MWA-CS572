import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

  constructor(private httpClient: HttpClient) { }

  private sendGet(url: string): Observable<any> {
    return this.httpClient.get(`http://jsonplaceholder.typicode.com/${url}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getUser(userId: number): Observable<any> {
    return this.sendGet(`users/${userId}`);
  }
  getPosts(userId: number): Observable<any> {
    return this.sendGet(`posts?userId=${userId}`);
  }

}
