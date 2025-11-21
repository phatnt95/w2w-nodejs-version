import mongoose from 'mongoose';
import fs from 'fs';
import Location from './src/models/inventory/location.model.js';
import Storage from './src/models/inventory/storage.model.js';
import Cabinet from './src/models/inventory/cabinet.model.js';
import Bin from './src/models/inventory/bin.model.js';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fashiondb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
        process.exit(1);
    });

const seedData = JSON.parse(fs.readFileSync('./data/inventory_seed.json', 'utf8'));

async function seedInventory() {
    try {
        console.log('Clearing existing inventory data...');
        await Bin.deleteMany({});
        await Cabinet.deleteMany({});
        await Storage.deleteMany({});
        await Location.deleteMany({});

        console.log('Seeding new inventory data...');

        for (const locData of seedData) {
            // Create Location
            const location = new Location({
                code: locData.code,
                name: locData.name
            });
            await location.save();
            console.log(`Created Location: ${location.name}`);

            if (locData.storages) {
                for (const storageData of locData.storages) {
                    // Create Storage
                    const storage = new Storage({
                        name: storageData.name,
                        type: storageData.type,
                        location: location._id
                    });
                    await storage.save();
                    console.log(`  Created Storage: ${storage.name}`);

                    if (storageData.cabinets) {
                        for (const cabinetData of storageData.cabinets) {
                            // Create Cabinet
                            const cabinet = new Cabinet({
                                name: cabinetData.name,
                                material: cabinetData.material,
                                storage: storage._id
                            });
                            await cabinet.save();
                            console.log(`    Created Cabinet: ${cabinet.name}`);

                            if (cabinetData.bins) {
                                for (const binData of cabinetData.bins) {
                                    // Create Bin
                                    const bin = new Bin({
                                        name: binData.name,
                                        type: binData.type,
                                        cabinet: cabinet._id
                                    });
                                    await bin.save();
                                    console.log(`      Created Bin: ${bin.name}`);
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log('✅ Inventory seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding inventory:', error);
        process.exit(1);
    }
}

seedInventory();
