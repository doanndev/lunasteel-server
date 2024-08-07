/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Price } from "src/models/pricings.model";


@Injectable()
export class PricingService {
    constructor(
        @InjectModel(Price.name) private PricingModel: Model<Price>) {
    }
    getPricing() {
        return this.PricingModel.find()
    }
};