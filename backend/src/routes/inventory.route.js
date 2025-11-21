import { Router } from "express";
import { getLocations, createLocation } from "../controllers/location.controller.js";
import { getStorages, createStorage } from "../controllers/storage.controller.js";
import { getCabinets, createCabinet } from "../controllers/cabinet.controller.js";
import { getBins, createBin } from "../controllers/bin.controller.js";

import { getPlacements, createPlacement } from "../controllers/placement.controller.js";

const inventoryRoutes = Router();

// locations
inventoryRoutes.get("/locations/", getLocations);
inventoryRoutes.post("/locations/", createLocation);
// storages
inventoryRoutes.get("/storages/:locationId", getStorages);
inventoryRoutes.post("/storages/", createStorage);
// cabinets
inventoryRoutes.get("/cabinets/:storageId", getCabinets);
inventoryRoutes.post("/cabinets/", createCabinet);
// bins
inventoryRoutes.get("/bins/:cabinetId", getBins);
inventoryRoutes.post("/bins/", createBin);
// placements
inventoryRoutes.get("/placements/", getPlacements);
inventoryRoutes.post("/placements/", createPlacement);

export default inventoryRoutes;