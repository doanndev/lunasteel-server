/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ticketInforClass } from "src/interface/model.interface";

@Schema()
export class Order extends Document {
    @Prop({type:Object})
    ticketInfor: ticketInforClass;

    @Prop()
    orderStatus: string;

    @Prop()
    properties: string;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const OrderModel = SchemaFactory.createForClass(Order);

