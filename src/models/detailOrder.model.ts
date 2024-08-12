/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema()
export class DetailOrder extends Document {
    @Prop()
    orderId: ObjectId;

    @Prop()
    customerId: ObjectId

    @Prop()
    promotionId: ObjectId;

    @Prop()
    orderType: string;

    @Prop()
    progress: object;

    @Prop()
    deliveryOption: string;

    @Prop()
    productionPlanId: ObjectId;

    @Prop()
    deliveryPlanId: ObjectId;

    @Prop()
    paymentPlanId: ObjectId;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const DetailOrderModel = SchemaFactory.createForClass(DetailOrder);

