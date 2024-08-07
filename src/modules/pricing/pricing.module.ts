/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PricingController } from "./pricing.controller";
import { PricingService } from "./pricing.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Price, PricingModel } from "src/models/pricings.model";

@Module({
    imports: [MongooseModule.forFeature([{ name: Price.name, schema: PricingModel }])],
    controllers: [PricingController],
    providers: [PricingService]
})


export class PricingModule{};