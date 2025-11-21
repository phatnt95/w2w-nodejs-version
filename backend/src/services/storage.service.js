import Storage from "../models/inventory/storage.model.js";

export const create = async (data) => {
    const storage = new Storage(data);
    return await Storage.create(storage);
}

export const findByLocation = async (locationId) => {
  const storages = Storage.find({ location: locationId })
    .populate('location')
    .lean();
  return storages;
}; 