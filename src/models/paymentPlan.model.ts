import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema()
export class PaymentPlan extends Document {
    @Prop()
    paymentOption: string;

    @Prop()
    totalPrice: number;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const PaymentPlanModel = SchemaFactory.createForClass(PaymentPlan);

