/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ItemsService } from "./item.service";

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }
    @Get()
    async getItems() {
        return this.itemsService.getItems();
    }

    @Get('surfaceCoating')
    async filterSurfaceCoating() {
        return this.itemsService.filterSurfaceCoating();
    }

    @Post()
    filterData(@Body() {
        surfaceCoatingLayer: surfaceCoatingLayer,
        ZAZCoating: ZAZCoating
    }: {surfaceCoatingLayer: string, ZAZCoating: string}) {
        return this.itemsService.filterData({
            surfaceCoatingLayer: surfaceCoatingLayer,
            ZAZCoating: ZAZCoating
        });
    }

    @Get('filter')
    getGroup(
        @Query('surfaceCoatingLayer') surfaceCoatingLayer: string,
        @Query('ZAZCoating') ZAZCoating: number
    ) {
        return `surfaceCoatingLayer: ${surfaceCoatingLayer} - ZAZCoating: ${ZAZCoating}`;
    }


}