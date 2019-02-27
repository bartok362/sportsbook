import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/custom-types';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter<IBook>();
  constructor() {}

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
