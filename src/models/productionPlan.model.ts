/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema()
export class ProductionPlan extends Document {
    @Prop()
    itemId: ObjectId;

    @Prop()
    estimatedTime: Date;

    @Prop()
    otherRequirement: string;

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

export const ProductionPlanModel = SchemaFactory.createForClass(ProductionPlan);

