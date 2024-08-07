/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ItemsService } from "./item.service";
import { filterDataClass } from "src/Global/GlobalClass";

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
    }: filterDataClass) {
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


    // @Get('search/:searchTerm')
    // searchItems(@Param('searchTerm') searchTerm: string) {
    //     return this.itemsService.searchItems(searchTerm)
    // }
}