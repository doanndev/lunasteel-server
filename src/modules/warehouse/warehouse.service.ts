/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Warehouse } from "src/models/warehouses.model";


@Injectable()
export class WarehouseService {
    constructor(
        @InjectModel(Warehouse.name) private WarehouseModel: Model<Warehouse>) {
    }
    async getWarehouse() {
        return this.WarehouseModel.find();
    }

    async postTotalCoil(
        {
            itemId: itemId,
            totalCoil: totalCoil
        }: { itemId: number, totalCoil: number }
    ) {
        // const data = await this.WarehouseModel.find({ itemId: itemId }).limit(Number(totalCoil))

        // const totalWeigh = data.reduce((sum, item) => sum + item.netWeightKg, 0)
        // const responseData = {
        //     data: data,
        //     itemId: itemId,
        //     totalCoil: totalCoil,
        //     totalWeigh: totalWeigh
        // }
        // return responseData;
        return;
    }
    async postTotalWeigh(
        {
            itemId: itemId,
            totalWeigh: totalWeigh
        }: { itemId: number, totalWeigh: number }
    ) {
        const result = await this.WarehouseModel.aggregate([
            {
                $match: { itemId }
            },
            {
                $project: {
                    itemId: 1,
                    netWeightKg: 1
                }
            },
            {
                $group: {
                    _id: null,
                    items: { $push: "$$ROOT" },
                    totalNetWeightKg: { $sum: "$netWeightKg" }
                }
            },
            {
                $addFields: {
                    selectedItems: {
                        $reduce: {
                            input: "$items",
                            initialValue: { totalNetWeightKg: 0, selectedItems: [] },
                            in: {
                                $let: {
                                    vars: {
                                        newTotal: { $add: ["$$value.totalNetWeightKg", "$$this.netWeightKg"] }
                                    },
                                    in: {
                                        totalNetWeightKg: {
                                            $cond: [
                                                { $lte: ["$$newTotal", { $add: [totalWeigh, 500] }] },
                                                "$$newTotal",
                                                "$$value.totalNetWeightKg"
                                            ]
                                        },
                                        selectedItems: {
                                            $cond: [
                                                { $lte: ["$$newTotal", { $add: [totalWeigh, 500] }] },
                                                { $concatArrays: ["$$value.selectedItems", ["$$this"]] },
                                                "$$value.selectedItems"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    items: "$selectedItems.selectedItems",
                    totalNetWeightKg: "$selectedItems.totalNetWeightKg"
                }
            }
        ]).exec();

        return result.length ? {
            items: result[0].items,
            totalNetWeight: result[0].totalNetWeightKg,
            totalCoil: result[0].items.length
        } : {
            items: [],
            totalNetWeightKg: 0
        };

    }

    async getDetailOrder(id: number) {
        const data = await this.WarehouseModel
            .aggregate([
                {
                    $match: { coilID: id }
                },
                {
                    $lookup: {
                        from: 'items',
                        localField: 'itemId',
                        foreignField: '_id',
                        as: 'itemDetails'
                    }
                },
                // {
                //     $unwind: '$itemDetails'
                // }
            ]).exec()
        return data
    }
}