import { ApplicationConfig } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../../app.routes';
import { provideRouter } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};

@Injectable({
  providedIn: 'root',
})
export class BookinapiService {
  private readonly API_URL = 'http://localhost:5000'; //port ptet a modifier
  constructor(private readonly http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBookById(book_id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + `/books/${book_id}`);
  }
  /*
  addOne(book: Book): Observable<{id: number}>{
    return this.http
    .post<{ ressource_location: number }>(this.API_URL + '/books', book)
    .pipe(map((data) => ({id: data.ressource_location})));
  }*/
/*
  deleteOne(book_id: number): Observable<> {
    return this.http.delete<{}>(this.API_URL + `/books/${book_id}`);
  }*/
}
