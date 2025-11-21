import Placement from "../models/inventory/placement.model.js";

export const create = async (data) => {
    const placement = new Placement(data);
    return await Placement.create(placement);
}

export const findAll = async () => {
    const placements = Placement.find().lean();
    return placements;
} 