import * as cabinetService from "../services/cabinet.service.js";

export const getCabinets = async (req, res, next) => {
    try {
        const {storageId} = req.params;
        const cabinets = await cabinetService.findByStorage(storageId);
        res.json(cabinets);
    } catch (error) {
        next(error);
    } 
}

export const createCabinet = async (req, res, next) => {
    try {
        const cabinet = await cabinetService.create(req.body);
        res.status(201).json(cabinet);
    } catch (error) {
        next(error);
    }
};