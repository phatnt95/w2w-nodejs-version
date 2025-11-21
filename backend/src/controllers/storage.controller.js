import * as storageService from "../services/storage.service.js";

export const getStorages = async (req, res, next) => {
    try {
        const {locationId} = req.params;
        const storages = await storageService.findByLocation(locationId);
        res.json(storages);
    } catch (error) {
        next(error);
    } 
}

export const createStorage = async (req, res, next) => {
    try {
        const storage = await storageService.create(req.body);
        res.status(201).json(storage);
    } catch (error) {
        next(error);
    }
};