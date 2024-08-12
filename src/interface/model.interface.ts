/* eslint-disable prettier/prettier */
export class groupClass {
    groupLevel1: number;
    groupLevel2: number;
    groupLevel3: number;
}

export class thicknessClass {
    baseSteelThickness: string;
    postGalvanizationThickness: string;
    postPaintThickness: string;
    pipeWallThickness: string;
}


export class colorClass {
    ColorCode: string;
    primaryPaintColorCode: string;
    backPaintColorCode: string;
}

export class dismensionalClass {
    upper: number;
    lower: number;
}


export class descriptionClass {
    shortDescription: string;
    overviewLongDescriptions: string;
    tradeName: string;
}

export class revisionClass {
    revisionVersion: number;
    revisionTrack: number
}

export class codeClass {
    productCode: string;
    ABCCode: string;
    alloyCode: string;
}

export class costClass {
    costType: string;
    costMethod: string;
}

export class otherClass {
    activeforDataIntegration: number;
    acceptrequirement: number;
    passrequirement: number;
    lotTrack: number;
    reservable: number;
}

export class receiptInforClass {
    receiptDate: Date;
    receiptNumber: number;
}

export class supplierClass {
    supplierCoilId: number;
    supplierName: string;
}

export class lengthClass { 
    lengthA: number
    lengthB: number
    lengthC: number
}

export class weightClass {
    NetWeight: number;
    GrossWeight: number;
}

export class ticketInforClass {
    ticketId: number;
    ticketStatis: string[];
}