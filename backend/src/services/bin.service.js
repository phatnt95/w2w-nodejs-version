import Bin from "../models/inventory/cabinet.model.js";

export const create = async (data) => {
    const bin = new Bin(data);
    return await Bin.create(bin);
}

export const findByCabinet = async (cabinetId) => {
    const bins = Bin.find({ cabinet: cabinetId }).populate("cabinet").lean();
    return bins;
}; 