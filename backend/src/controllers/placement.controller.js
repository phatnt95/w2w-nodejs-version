import * as placementService from "../services/placement.service.js";

export const getPlacements = async (req, res, next) => {
    try {
        const placements = await placementService.findAll();
        res.json(placements);
    } catch (error) {
        next(error);
    }
}

export const createPlacement = async (req, res, next) => {
    try {
        const placement = await placementService.create(req.body);
        res.status(201).json(placement);
    } catch (error) {
        next(error);
    }
};