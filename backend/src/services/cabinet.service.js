import Cabinet from "../models/inventory/cabinet.model.js";

export const create = async (data) => {
    const cabinet = new Cabinet(data);
    return await Cabinet.create(cabinet);
}

export const findByStorage = async (storageId) => {
    const cabinets = Cabinet.find({ storage: storageId })
      .populate("storage")
      .lean();
    return cabinets;
} 