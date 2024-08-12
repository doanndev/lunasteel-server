/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema()
export class Discount extends Document {
    @Prop()
    orderId: ObjectId;

    @Prop()
    discountName: string;

    @Prop()
    description: string;

    @Prop()
    discountPercent: number;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const DiscountModel = SchemaFactory.createForClass(Discount);

