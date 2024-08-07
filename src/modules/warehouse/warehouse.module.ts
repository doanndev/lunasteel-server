/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Warehouse, WarehouseModel } from "src/models/warehouses.model";

@Module({
    imports: [MongooseModule.forFeature([{name: Warehouse.name, schema: WarehouseModel }])],
    controllers: [WarehouseController],
    providers: [WarehouseService]
})

export class WarehouseModule { };