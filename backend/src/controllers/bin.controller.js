import * as binService from "../services/bin.service.js";

export const getBins = async (req, res, next) => {
    try {
        const {cabinetId} = req.params;
        const bins = await binService.findByCabinet(cabinetId);
        res.json(bins);
    } catch (error) {
        next(error);
    } 
}

export const createBin = async (req, res, next) => {
    try {
        const bin = await binService.create(req.body);
        res.status(201).json(bin);
    } catch (error) {
        next(error);
    }
};