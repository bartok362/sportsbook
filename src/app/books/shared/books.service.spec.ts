import { TestBed, inject } from '@angular/core/testing';

import { BooksService } from './books.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { mockBooks } from './mock.book.service';

describe('BooksService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });

  it('should return books', inject(
    [BooksService, HttpTestingController],
    (service: BooksService, backend: HttpTestingController) => {
      service.getBooks().subscribe(b => {
        expect(b).toBe(mockBooks);
      });
      const call = backend.expectOne('http://localhost:4730/books/');
      expect(call.request.method).toBe('GET');
      call.flush(mockBooks, { status: 200, statusText: 'OK' });
    }
  ));
});
