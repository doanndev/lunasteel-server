/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, } from "@nestjs/common";
import { WarehouseService } from "./warehouse.service";

@Controller('warehouse')
export class WarehouseController {
    constructor(private readonly warehouseService: WarehouseService) { }
    @Get()
    getWarehouse() {
        return this.warehouseService.getWarehouse();
    }

    @Post('calTotalWeigh')
    postTotalCoil(@Body() {
        itemId: itemId,
        totalCoil: totalCoil
    }: { itemId: number, totalCoil: number }) {
        return this.warehouseService.postTotalCoil({
            itemId: itemId,
            totalCoil: totalCoil
        });
    }

    @Post('calTotalCoil')
    postTotalWeigh(@Body() {
        itemId: itemId,
        totalWeigh: totalWeigh
    }: { itemId: number, totalWeigh: number }) {
        return this.warehouseService.postTotalWeigh({
            itemId: itemId,
            totalWeigh: totalWeigh
        });
    }

    @Get('getDetailOrder/:id')
    getDetailOrder(@Param('id') id: string) {
        return this.warehouseService.getDetailOrder(Number(id));
    }

}