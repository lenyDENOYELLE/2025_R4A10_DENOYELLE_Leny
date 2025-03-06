import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { BookinapiService } from '../../services/book-inapi/bookinapi.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [],
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    //private readonly bookService: BooksInMemoryService,
    private readonly bookService: BookinapiService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.book = this.bookService.getBookById(id);
    this.bookService.getBookById(id)
    .pipe(take(1))
    .subscribe((data) => { this.book = data});
  }
}
