/* eslint-disable prettier/prettier */
import { integer } from "@elastic/elasticsearch/lib/api/types";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { codeClass, colorClass, costClass, descriptionClass, dismensionalClass, groupClass, otherClass, revisionClass, thicknessClass } from "src/interface/model.interface";

@Schema()
export class Item extends Document {
    @Prop({type: Object})
    group: groupClass;

    @Prop()
    grade: string;

    @Prop()
    standart: string;

    @Prop({type: Object})
    thickness: thicknessClass;

    @Prop()
    width: number;

    @Prop({ required: false })
    diameter?: string;

    @Prop({index: true})
    ZAZCoating: string;

    @Prop()
    paintCoatingWeight: number;

    @Prop({ type: Object})
    color: colorClass;

    @Prop({ required: false })
    length?: number;

    @Prop()
    shape: string;

    @Prop({index: true})
    surfaceCoatingLayer: string;

    @Prop({ required: false })
    glossiness?: number;

    @Prop({ required: false })
    conversionRatio?: number;

    @Prop({type: Object})
    dismensional: dismensionalClass;

    @Prop()
    alloyCode: string;

    @Prop({type: Object})
    description: descriptionClass;

    @Prop({type: Object})
    revision: revisionClass;


    @Prop()
    stocked: boolean;

    @Prop()
    showInDropDownList: integer;

    @Prop()
    UM: string;

    @Prop()
    type: string;

    @Prop()
    source: string;

    @Prop({type: Object})
    code: codeClass;

    @Prop({type:Object})
    cost: costClass;

    @Prop()
    other: otherClass;

    @Prop()
    tradeName: string;

    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;
    // @Prop()
    // activeforDataIntegration: boolean;

    // @Prop()
    // acceptRequirement: boolean;

    // @Prop()
    // passrequirement: boolean;

    // @Prop()
    // lotTrack: boolean;

    // @Prop()
    // reservable: boolean

}

export const ItemModel = SchemaFactory.createForClass(Item);

ItemModel.index({ _id: 1 });