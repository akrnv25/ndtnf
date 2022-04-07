import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';

import { BooksService } from './books.service';
import { Book, BookOpts } from '../core';

@Controller('books')
export class BooksController {

  constructor(
    private booksService: BooksService
  ) {
  }

  @Post()
  @FormDataRequest()
  create(@Body() opts: BookOpts): Book {
    return this.booksService.create(opts);
  }

  @Get()
  readAll(): Book[] {
    return this.booksService.readAll();
  }

  @Get(':id')
  read(@Param('id') id: string): Book {
    return this.booksService.read(id);
  }

  @Put(':id')
  @FormDataRequest()
  update(@Param('id') id: string, @Body() opts: BookOpts): Book {
    return this.booksService.update(id, opts);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.booksService.delete(id);
  }

}
