import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private films = [];
  private filmsChange: Subject<any> = new Subject();
  private title = '';
  private year = 0;
  page = 1;
  totalPages = 0;
  private removedFilms = 0;
  API_URL = environment.API_FILMS_URL;

  filmsChange$: Observable<any> = this.filmsChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  search(title, year?) {
    const options = {
      withCredentials: true
    };

    let filter = `s=${title}`;

    if (year && year > 0) {
      filter += `&y=${year}`;
    }

    filter += `&page=${this.page}`;

    this.httpClient.get(`${this.API_URL}/search/${filter}`, options).toPromise()
      .then((data: any) => {
        this.title = title;
        this.year = year;
        this.films = data.Search;
        // this.removeFilmsWithoutPoster();
        this.calcTotalPages(data.totalResults);
        this.filmsChange.next(this.films);
      })
      .catch(error => {
        this.init();
        this.films = [];
        this.filmsChange.next(this.films);

        switch (error.error.code) {
          case 'movie-not-found':
            break;

          case 'too-many-results':
            break;

          default:
            break;
        }

        console.log(error);
      });
  }

  searchById(imdbId) {
    const options = {
      withCredentials: true
    };

    let filter = `i=${imdbId}`;

    filter += '&plot=short';

    this.httpClient.get(`${this.API_URL}/search/${filter}`, options).toPromise()
      .then((data: any) => {
        // this.calcTotalPages(data.totalResults);
        this.films = [];
        this.films[0] = data;
        this.filmsChange.next(this.films);
      })
      .catch(error => {
        this.init();
        this.films = [];
        this.filmsChange.next(this.films);

        switch (error.error.code) {
          case 'movie-not-found':
            break;

          case 'too-many-results':
            break;

          default:
            break;
        }

        console.log(error);
      });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
    this.search(this.title, this.year);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.search(this.title, this.year);
    }
  }

  init() {
    this.title = '';
    this.year = 0;
    this.page = 1;
    this.totalPages = 0;
    this.removedFilms = 0;
  }

  calcTotalPages(totalResults) {
    this.totalPages = Math.ceil((totalResults - this.removedFilms) / 10);
  }

  removeFilmsWithoutPoster() {
    this.films.forEach((element, index, arr) => {
      if (element.Poster === 'N/A') {
        arr.splice(index, 1);
        this.removedFilms++;
      }
    });
  }

  addToFavourites(imdbId, user) {
    const options = {
      withCredentials: true
    };

    this.httpClient.post(`${this.API_URL}/addToFavourites/${imdbId}&${user}`, options).toPromise()
      .then((data: any) => {
        // this.films = [];
        // this.films[0] = data;
        // this.filmsChange.next(this.films);
      })
      .catch(error => {
        // this.init();
        // this.films = [];
        // this.filmsChange.next(this.films);

        // switch (error.error.code) {
        //   case 'movie-not-found':
        //     break;

        //   case 'too-many-results':
        //     break;

        //   default:
        //     break;
        // }

        console.log(error);
      });
  }

  filmsByUser(user) {
    const options = {
      withCredentials: true
    };

    this.httpClient.get(`${this.API_URL}/filmsByUser/${user}`, options).toPromise()
      .then((data: any) => {
        this.films = [];
        this.films = data;
        this.sortFilms();
        this.filmsChange.next(this.films);
      })
      .catch(error => {
        this.init();
        this.films = [];
        this.filmsChange.next(this.films);

        switch (error.error.code) {
          case 'movie-not-found':
            break;

          case 'too-many-results':
            break;

          default:
            break;
        }

        console.log(error);
      });
  }

  sortFilms() {
    this.films.sort((a, b) => {
      const titleA = a.Title.toUpperCase();
      const titleB = b.Title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      }

      if (titleA > titleB) {
        return 1;
      }

      return 0;
    });
  }

  vote(imdbID, userID, score) {
    const options = {
      withCredentials: true
    };

    this.httpClient.post(`${this.API_URL}/vote/${imdbID}&${userID}&${score}`, options).toPromise()
      .then((data: any) => {
        // this.films = [];
        // this.films[0] = data;
        // this.filmsChange.next(this.films);
      })
      .catch(error => {
        // this.init();
        // this.films = [];
        // this.filmsChange.next(this.films);

        // switch (error.error.code) {
        //   case 'movie-not-found':
        //     break;

        //   case 'too-many-results':
        //     break;

        //   default:
        //     break;
        // }

        console.log(error);
      });
  }
}
