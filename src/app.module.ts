/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricingModule } from './modules/pricing/pricing.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { ItemsModule } from './modules/items/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisCacheModule } from './modules/redisCache/redis-cache.module';
// import { CustomElasticsearchModule } from './modules/elasticsearch/elasticsearch.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/lunasteel'),
    // CustomElasticsearchModule,
    RedisCacheModule,
    ItemsModule,  
    PricingModule,
    WarehouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
