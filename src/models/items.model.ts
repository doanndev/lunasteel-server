/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Item extends Document {

    @Prop({ _id: false })
    _id: number;

    @Prop()
    group: string;

    @Prop()
    grade: string;

    @Prop()
    standard: string;

    @Prop()
    baseSteelThickness: number;

    @Prop()
    postGalvanizationThickness: number;

    @Prop({ required: false })
    postPaintThickness?: number;

    @Prop({ required: false })
    pipeWallThickness?: number;

    @Prop()
    width: number;

    @Prop({ required: false })
    diameter?: string;

    @Prop({index: true})
    ZAZCoating: string;

    @Prop()
    paintCoatingWeight: number;

    @Prop({ index: true})
    color: string;

    @Prop()
    primaryPaintColorCode: string;

    @Prop()
    backPaintColorCode: string;

    @Prop({ required: false })
    length?: number;

    @Prop()
    shape: string;

    @Prop({index: true})
    surfaceCoatingLayer: string;

    @Prop({ required: false })
    glossiness?: number;

    @Prop({ required: false })
    conversionRatio?: number

    @Prop()
    lowerDimensionalTolerance: number;

    @Prop()
    upperDimensionalTolerance: number;

    @Prop()
    alloyCode: string;

    @Prop()
    revision: number;

    @Prop()
    revisionTrack: number;

    @Prop()
    stocked: boolean;

    @Prop()
    UM: string;

    @Prop()
    type: string;

    @Prop()
    source: string;

    @Prop()
    productCode: string;

    @Prop()
    ABCCode: string;

    @Prop()
    costType: string;

    @Prop()
    costMethod: string;

    @Prop()
    activeforDataIntegration: boolean;

    @Prop()
    acceptRequirement: boolean;

    @Prop()
    passrequirement: boolean;

    @Prop()
    lotTrack: boolean;

    @Prop()
    reservable: boolean

    @Prop()
    descriptions: string;


    @Prop()
    createAt: Date;

    @Prop()
    updatedAt: Date;

}

export const ItemModel = SchemaFactory.createForClass(Item);

ItemModel.index({ _id: 1 });