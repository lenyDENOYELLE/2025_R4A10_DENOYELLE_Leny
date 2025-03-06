import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { BookinapiService } from '../../services/book-inapi/bookinapi.service';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  //private readonly bookService = inject(BooksInMemoryService);
  private readonly bookService = inject(BookinapiService);
  books: Book[] = [];

  ngOnInit() {
    //this.books = this.bookService.getAllBooks();
    this.bookService.getAllBooks()
    .pipe(take(1))
    .subscribe((data) => {this.books = data});
  }
}
