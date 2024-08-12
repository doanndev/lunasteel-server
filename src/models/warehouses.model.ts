/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { lengthClass, receiptInforClass, supplierClass, weightClass } from "src/interface/model.interface";

@Schema()
export class Warehouse extends Document {

    @Prop()
    itemId: number;

    @Prop()
    coilID: number;

    @Prop({type: Object})
    receiptInfor: receiptInforClass;

    @Prop()
    supplier: supplierClass;

    @Prop()
    plating: string;

    @Prop({type: Object})
    weight: weightClass;

    @Prop()
    amount: number;

    @Prop()
    density: number;

    @Prop()
    prime: string;

    @Prop({type:Object})
    length:lengthClass;

    @Prop()
    storageLocation: string;

    @Prop()
    note: string;

    @Prop()
    inputInterpretation: string;

    @Prop()
    ageOfInventory: string;

    @Prop()
    reportCLC: string;

    @Prop()
    supplierName: string;

    @Prop()
    order: string;

    @Prop()
    orderID: string;

    @Prop()
    customer: string;

    @Prop()
    warehouseCode: number;

    @Prop()
    orderStatus: number;

    @Prop()
    standardPacking: boolean;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
}

export const WarehouseModel = SchemaFactory.createForClass(Warehouse);
