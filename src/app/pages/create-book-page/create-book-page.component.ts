import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CreateBookFormComponent } from '../../components/create-book-form/create-book-form.component';

import { Book } from '../../models/book'
import { BooksInMemoryService } from '../../services/book-inmemory.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [CreateBookFormComponent],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  private readonly bookService = inject(BooksInMemoryService);


  onBookCreation($book: Book){
    this.bookService.createBook($book);
  }
}
