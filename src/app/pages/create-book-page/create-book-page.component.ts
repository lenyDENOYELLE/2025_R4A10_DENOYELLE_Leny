import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CreateBookFormComponent } from '../../components/create-book-form/create-book-form.component';
import { Router } from '@angular/router';
import { Book } from '../../models/book'
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { BookinapiService } from '../../services/book-inapi/bookinapi.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [CreateBookFormComponent],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  //private readonly bookService = inject(BooksInMemoryService);
  private readonly bookService = inject(BookinapiService);
  constructor(
    private router: Router,
  ){}


  onBookCreation($book: Book){
    this.bookService.createBook($book).subscribe(() => {this.router.navigate(['/'])});
  }
}
