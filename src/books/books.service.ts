import { Injectable } from '@nestjs/common';

import { Book, BookOpts, generateId } from '../core';

@Injectable()
export class BooksService {

  private books: Book[] = [{
    id: '1000-4000',
    author: 'Book 1 Author',
    title: 'Book 1 Title'
  }, {
    id: '1001-4001',
    author: 'Book 2 Author',
    title: 'Book 2 Title'
  }];

  constructor() {
  }

  create(opts: BookOpts): Book {
    const id = generateId();
    return { id, ...opts };
  }

  read(id: string): Book {
    return this.books.find(book => book.id === id);
  }

  readAll(): Book[] {
    return this.books;
  }

  update(id: string, opts: BookOpts): Book {
    const foundIdx = this.books.findIndex(book => book.id === id);
    if (foundIdx !== -1) {
      this.books[foundIdx] = { ...this.books[foundIdx], ...opts };
      return this.books[foundIdx];
    }
  }

  delete(id: string): void {
    const foundIdx = this.books.findIndex(book => book.id === id);
    if (foundIdx !== -1) {
      this.books.splice(foundIdx, 1);
    }
  }

}
