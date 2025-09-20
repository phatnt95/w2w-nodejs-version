import { Router } from "express";
import { getAllAttributes } from "../controllers/attribute.controller";

const attributeRoutes = Router();

attributeRoutes.get('/', getAllAttributes);

export default attributeRoutes;