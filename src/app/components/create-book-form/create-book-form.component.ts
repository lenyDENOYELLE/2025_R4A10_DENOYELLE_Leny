import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../../models/book'

@Component({
  selector: 'app-create-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-form.component.html',
  styleUrl: './create-book-form.component.sass'
})
export class CreateBookFormComponent {

  @Output() bookCreationEventEmitter = new EventEmitter<Book>();

  bookForm = new FormGroup({
    author: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
  });

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookCreationEventEmitter.emit(this.bookForm.value as Book);
    }
  }
}
