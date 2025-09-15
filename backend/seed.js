import mongoose from 'mongoose';
import fs from 'fs';

import { BrandSchema } from './src/models/attributes/brandModel.js';
import { CategorySchema } from './src/models/attributes/categoryModel.js';
import { ColorSchema } from './src/models/attributes/colorModel.js';
import { SizeSchema } from './src/models/attributes/sizeModel.js';
import { StyleSchema } from './src/models/attributes/styleModel.js';
import { NecklineSchema } from './src/models/attributes/necklineModel.js';
import { SleeveLengthSchema } from './src/models/attributes/sleeveLengthModel.js';
import { ShoulderSchema } from './src/models/attributes/shoulderModel.js';
import { OccasionSchema } from './src/models/attributes/occasionModel.js';
import { SeasonCodeSchema } from './src/models/attributes/seasonCodeModel.js';
import { TagSchema } from './src/models/attributes/tagModel.js';
import { TypeSchema } from './src/models/attributes/typeModel.js';

const Brand = mongoose.model('Brand', BrandSchema);
const Category = mongoose.model('Category', CategorySchema);
const Color = mongoose.model('Color', ColorSchema);
const Size = mongoose.model('Size', SizeSchema);
const Style = mongoose.model('Style', StyleSchema);
const Neckline = mongoose.model('Neckline', NecklineSchema);
const SleeveLength = mongoose.model('SleeveLength', SleeveLengthSchema);
const Shoulder = mongoose.model('Shoulder', ShoulderSchema);
const Occasion = mongoose.model('Occasion', OccasionSchema);
const SeasonCode = mongoose.model('SeasonCode', SeasonCodeSchema);
const Tag = mongoose.model('Tag', TagSchema);
const Type = mongoose.model('Type', TypeSchema);

mongoose.connect('mongodb://localhost:27017/fashiondb');

const seedData = JSON.parse(fs.readFileSync('./data/seed.json', 'utf8'));

async function seed() {
  await Brand.insertMany(seedData.brands);
  await Category.insertMany(seedData.categories);
  await Color.insertMany(seedData.colors);
  await Size.insertMany(seedData.sizes);
  await Style.insertMany(seedData.styles);
  await Neckline.insertMany(seedData.necklines);
  await SleeveLength.insertMany(seedData.sleeveLengths);
  await Shoulder.insertMany(seedData.shoulders);
  await Occasion.insertMany(seedData.occasions);
  await SeasonCode.insertMany(seedData.seasonCodes);
  await Tag.insertMany(seedData.tags);
  await Type.insertMany(seedData.types);

  console.log("✅ Seed data inserted successfully!");
  process.exit();
}

seed();
