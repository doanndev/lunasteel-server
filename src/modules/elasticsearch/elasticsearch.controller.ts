import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MyElasticsearchService } from './elasticsearch.service';

@Controller('elasticsearch')
export class MyElasticsearchController {
  constructor(private readonly elasticsearchService: MyElasticsearchService) {}

  @Get('search/')
  async search(
    @Body() query: any,
  ) {
    return this.elasticsearchService.search(query);
  }
}
