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
  
  createBook(book: Book): Observable<number> {
    return this.http.post<{ id: number }>(this.API_URL + '/books', book)
    .pipe(map((response: { id: number }) => response.id));
  }


  deleteOne(book_id: number): Observable<string> {
    return this.http.delete<{ message: string }>(this.API_URL + `/books/${book_id}`)
    .pipe(map((response: { message: string }) => response.message));
  }
}
