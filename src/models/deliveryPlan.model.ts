/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class DeliveryPlan extends Document {
    @Prop()
    ETD: Date;

    @Prop()
    estimatedTime: Date;

    @Prop()
    packagingStyle: string;

    @Prop()
    deliveryMethod: string;

    @Prop()
    extensionTime: Date;

    @Prop()
    newEstimatedTime: Date;

    @Prop()
    reasonExtension: string;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const DeliveryPlanModel = SchemaFactory.createForClass(DeliveryPlan);

