import * as locationService from "../services/location.service.js";

export const getLocations = async (req, res, next) => {
    try {
        const locations = await locationService.findAll();
        res.json(locations);
    } catch (error) {
        next(error);
    } 
}

export const createLocation = async (req, res, next) => {
    try {
        const locations = await locationService.create(req.body);
        res.status(201).json(locations);
    } catch (error) {
        next(error);
    }
};