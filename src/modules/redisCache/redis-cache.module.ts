/* eslint-disable prettier/prettier */
import { Module, Global } from "@nestjs/common";
import { RedisCacheService } from "./redis-cache.service";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({
    imports: [ConfigModule],
    providers: [RedisCacheService],
    exports: [RedisCacheService],
})
export class RedisCacheModule { }
