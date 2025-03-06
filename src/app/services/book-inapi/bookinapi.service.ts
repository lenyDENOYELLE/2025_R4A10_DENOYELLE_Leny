import { ApplicationConfig } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../../app.routes';
import { provideRouter } from '@angular/router';
import { Observable, map} from 'rxjs';
import { Book } from '../../models/book';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};

@Injectable({
  providedIn: 'root',
})
export class BookinapiService {
  private readonly API_URL = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBookById(book_id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + `/books/${book_id}`);
  }
  
  createBook(book: Omit<Book, 'id' | 'coverUrl'>): Observable<number> {
    return this.http.post<{ id: number }>(`${this.API_URL}/books`, {
      ...book,
      coverUrl: 'https://placehold.co/150x200',
    }).pipe(
      map((response: { id: number }) => response.id));
  }

/*
  deleteOne(book_id: number): Observable<> {
    return this.http.delete<{}>(this.API_URL + `/books/${book_id}`);
  }*/
}
