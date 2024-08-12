/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Customer extends Document {
    @Prop()
    companyType: string;

    @Prop()
    companyName: string;

    @Prop()
    address: string;

    @Prop()
    debtLimit: number;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const CustomerModel = SchemaFactory.createForClass(Customer);

