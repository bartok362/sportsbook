import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { IBook } from '../shared/custom-types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
  deleteBook(book: IBook) {
    this.booksService.deleteBook(book).subscribe(() => this.ngOnInit());
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => (this.books = books));
  }
}
