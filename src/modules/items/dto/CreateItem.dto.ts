/* eslint-disable prettier/prettier */
import { surfaceCoatingEnum } from "../item.enum";

/* eslint-disable prettier/prettier */
export class CreateItemDto {
    _id: number;
    group: string;
    grade: string;
    standard: string;
    baseSteelThickness: number;
    postGalvanizationThickness: number;
    postPaintThickness?: number;
    pipeWallThickness?: number;
    width: number;
    diameter?: string;
    ZAZCoating: string;
    paintCoatingWeight: number;
    color: string;
    primaryPaintColorCode: string;
    backPaintColorCode: string;
    length?: number;
    shape: string;
    surfaceCoatingLayer: surfaceCoatingEnum;
    glossiness?: number;
    conversionRatio?: number
    lowerDimensionalTolerance: number;
    upperDimensionalTolerance: number;
    alloyCode: string;
    revision: number;
    revisionTrack: number;
    stocked: boolean;
    UM: string;
    type: string;
    source: string;
    productCode: string;
    ABCCode: string;
    costType: string;
    costMethod: string;
    activeforDataIntegration: boolean;
    acceptRequirement: boolean;
    passrequirement: boolean;
    lotTrack: boolean;
    reservable: boolean
    descriptions: string;
    createAt: Date;
    updatedAt: Date;
}