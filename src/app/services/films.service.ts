import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private films: any;
  private API_URL = environment.API_FILMS_URL;

  constructor(private httpClient: HttpClient) { }

  /* SEARCH */
  search(title, year?): Promise<any> {
    const options = {
      withCredentials: true
    };

    let filter = `s=${title}`;

    if (year) {
      filter += `y=${year}`;
    }

    return this.httpClient.get(`${this.API_URL}/search/${filter}`, options)
      .toPromise()
      .then((data) => this.films = data)
      .catch((err) => {
      });
  }
}
