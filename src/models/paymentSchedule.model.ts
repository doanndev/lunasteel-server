/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema()
export class PaymentSchedule extends Document {
    @Prop()
    paymentPlanId: ObjectId;

    @Prop()
    paymentDate: Date;

    @Prop()
    paymentAmout: number;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const PaymentScheduleModel = SchemaFactory.createForClass(PaymentSchedule);

