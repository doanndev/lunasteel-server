/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Item } from "../../models/items.model";
import { Model } from "mongoose";
import { filterDataClass } from "src/Global/GlobalClass";
import { RedisCacheService } from "../redisCache/redis-cache.service";


@Injectable()
export class ItemsService {
    constructor(
        private readonly redisCacheService: RedisCacheService,
        @InjectModel(Item.name) private ItemModel: Model<Item>,
    ) {
    }

    getItems() {
        return this.ItemModel.find();
    }

    async filterData({
        surfaceCoatingLayer: surfaceCoatingLayer,
        ZAZCoating: ZAZCoating
    }: filterDataClass) {
        const query = {
            surfaceCoatingLayer: surfaceCoatingLayer,
            ZAZCoating: ZAZCoating
        };

        const data = await this.ItemModel.find(query).distinct('descriptions').lean().exec();
        return data;
    }
    async filterSurfaceCoating() {
        const key = 'surfaceCoatingLayer'
        const value = await this.redisCacheService.get(key)
        if (value) {
            return JSON.parse(value)
        } else {
            const surfaceCoatingLayer = await this.ItemModel.distinct(key).lean().exec();
            await this.redisCacheService.set(key, surfaceCoatingLayer)
            return surfaceCoatingLayer
        }
    }
};