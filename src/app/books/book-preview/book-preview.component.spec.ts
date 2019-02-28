import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';

const mockBook = {
  title: 'Design Patterns',
  subtitle: 'Elements of Reusable Object-Oriented Software',
  isbn: '978-0-20163-361-0',
  abstract:
    'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
  numPages: 395,
  author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
  publisher: {
    name: 'Addison-Wesley',
    url: 'http://www.addison-wesley.de/'
  }
};

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;
  let view: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recive a book and show it', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const li = view.querySelector('li');
    expect(li.innerText).toBe(mockBook.title);
  });

  it('send a selected Book', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const btn = view.querySelector('.btn-info');
    component.bookselected.subscribe(b => expect(b).toBe(mockBook));
    btn.dispatchEvent(new Event('click'));
  });

  it('send a deleted Book', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const btn = view.querySelector('.btn-danger');
    component.delete.subscribe(b => expect(b).toBe(mockBook));
    btn.dispatchEvent(new Event('click'));
  });
});
