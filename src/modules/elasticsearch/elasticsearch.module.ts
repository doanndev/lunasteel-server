import { Module } from '@nestjs/common';
import { MyElasticsearchController } from './elasticsearch.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { MyElasticsearchService } from './elasticsearch.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  controllers:[MyElasticsearchController],
  providers: [MyElasticsearchService],
  exports: [ElasticsearchModule],
})
export class ElasticSearchModule {}