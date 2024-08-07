/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ItemsController } from "./item.controller";
import { ItemsService } from "./item.service";
import { Item, ItemModel } from "../../models/items.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports:
        [
            MongooseModule.forFeature([{ name: Item.name, schema: ItemModel }]),
        ],
    controllers: [ItemsController],
    providers: [ItemsService]
})


export class ItemsModule { };