import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksService } from '../shared/books.service';
import { of } from 'rxjs';
import { MockBooksService } from '../shared/mock.book.service';

@Component({
  selector: 'app-book-preview',
  template: ''
})
class Foo {
  @Input() book;
  @Output() bookselected = new EventEmitter();
  @Output() delete = new EventEmitter();
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let view: HTMLElement;
  let mySpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, Foo],
      providers: [
        {
          provide: BooksService,
          useClass: MockBooksService
        }
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
    const srv = TestBed.get(BooksService);
    mySpy = spyOn(srv, 'deleteBook').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 Books', async(() => {
    component.ngOnInit();
    const books = view.querySelectorAll('app-book-preview');
    expect(books.length).toBe(component.books.length);
  }));

  it('should call delete on service', () => {
    component.ngOnInit();
    component.deleteBook(component.books[0]);
    expect(mySpy).toHaveBeenCalled();
  });

  it('should call not delete on service without books', () => {
    component.deleteBook(component.books[0]);
    expect(mySpy).not.toHaveBeenCalled();
  });
});
