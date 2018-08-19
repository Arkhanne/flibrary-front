import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
  user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.API_AUTH_URL;

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);

    return user;
  }

  /* ME */
  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  /* LOGIN */
  login(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  /* SIGNUP */
  signup(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  /* LOGOUT */
  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/logout`, null, options)
      .toPromise()
      .then(() => this.setUser());
  }

  /* GETUSER */
  getUser(): any {
    return this.user;
  }
}
