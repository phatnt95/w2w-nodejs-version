import Location from "../models/inventory/location.model.js";

export const create = async (data) => {
    const location = new Location(data);
    return await Location.create(location);
}

export const findAll = async () => {
    const locations = Location.find().lean();
    return locations;
} 