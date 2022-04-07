import { Module } from '@nestjs/common';
import { NestjsFormDataModule } from 'nestjs-form-data';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [NestjsFormDataModule],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {
}
