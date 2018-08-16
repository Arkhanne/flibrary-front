import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private baseURL = 'http://www.omdbapi.com/?apikey=e87f567&';

  constructor(private httpClient: HttpClient) { }

  // getMovieByID() {
  //   return this.httpClient.get(`${this.baseURL}i=tt1201607`).toPromise();
  // }

  search(title, year?) {
    let yearFilter = '';

    if (year) {
      yearFilter = `y=${year}`;
    }

    return this.httpClient.get(`${this.baseURL}s=${title}${yearFilter}`).toPromise();
  }
}
