import mongoose from 'mongoose';
import { BrandSchema } from '../models/attributes/brandModel.js';
import { CategorySchema } from '../models/attributes/categoryModel.js';
import { ColorSchema } from '../models/attributes/colorModel.js';
import { SizeSchema } from '../models/attributes/sizeModel.js';
import { StyleSchema } from '../models/attributes/styleModel.js';
import { NecklineSchema } from '../models/attributes/necklineModel.js';
import { SleeveLengthSchema } from '../models/attributes/sleeveLengthModel.js';
import { ShoulderSchema } from '../models/attributes/shoulderModel.js';
import { OccasionSchema } from '../models/attributes/occasionModel.js';
import { SeasonCodeSchema } from '../models/attributes/seasonCodeModel.js';
import { TagSchema } from '../models/attributes/tagModel.js';
import { TypeSchema } from '../models/attributes/typeModel.js';

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

export const addNewBrand = (req, res) => {
    let newBrand = new Brand(req.body);
    newBrand.save((err, brand) => {
        if (err) {
            res.send(err);
        }
        res.json(brand);
    });
};

export const getBrands = (req, res) => {
    Brand.find({}, (err, brand) => {
        if (err) {
            res.send(err);
        }
        res.json(brand);
    });
};

export const addNewCategory = (req, res) => {
    let newCategory = new Category(req.body);
    newCategory.save((err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
};

export const getCategories = (req, res) => {
    Category.find({}, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
};
export const addNewColor = (req, res) => {
    let newColor = new Color(req.body);
    newColor.save((err, color) => {
        if (err) {
            res.send(err);
        }
        res.json(color);
    });
};

export const getColors = (req, res) => {
    Color.find({}, (err, color) => {
        if (err) {
            res.send(err);
        }
        res.json(color);
    });
};
export const addNewSize = (req, res) => {
    let newSize = new Size(req.body);
    newSize.save((err, size) => {
        if (err) {
            res.send(err);
        }
        res.json(size);
    });
};

export const getSizes = (req, res) => {
    Size.find({}, (err, size) => {
        if (err) {
            res.send(err);
        }
        res.json(size);
    });
};
export const addNewStyle = (req, res) => {
    let newStyle = new Style(req.body);
    newStyle.save((err, style) => {
        if (err) {
            res.send(err);
        }
        res.json(style);
    });
};

export const getStyles = (req, res) => {
    Style.find({}, (err, style) => {
        if (err) {
            res.send(err);
        }
        res.json(style);
    });
};
export const addNewNeckline = (req, res) => {
    let newNeckline = new Neckline(req.body);
    newNeckline.save((err, neckline) => {
        if (err) {
            res.send(err);
        }
        res.json(neckline);
    });
};

export const getNecklines = (req, res) => {
    Neckline.find({}, (err, neckline) => {
        if (err) {
            res.send(err);
        }
        res.json(neckline);
    });
};
export const addNewSleeveLength = (req, res) => {
    let newSleeveLength = new SleeveLength(req.body);
    newSleeveLength.save((err, sleeveLength) => {
        if (err) {
            res.send(err);
        }
        res.json(sleeveLength);
    });
};

export const getSleeveLengths = (req, res) => {
    SleeveLength.find({}, (err, sleeveLength) => {
        if (err) {
            res.send(err);
        }
        res.json(sleeveLength);
    });
};
export const addNewShoulder = (req, res) => {
    let newShoulder = new Shoulder(req.body);
    newShoulder.save((err, shoulder) => {
        if (err) {
            res.send(err);
        }
        res.json(shoulder);
    });
};

export const getShoulders = (req, res) => {
    Shoulder.find({}, (err, shoulder) => {
        if (err) {
            res.send(err);
        }
        res.json(shoulder);
    });
};
export const addNewOccasion = (req, res) => {
    let newOccasion = new Occasion(req.body);
    newOccasion.save((err, occasion) => {
        if (err) {
            res.send(err);
        }
        res.json(occasion);
    });
};

export const getOccasions = (req, res) => {
    Occasion.find({}, (err, occasion) => {
        if (err) {
            res.send(err);
        }
        res.json(occasion);
    });
};
export const addNewSeasonCode = (req, res) => {
    let newSeasonCode = new SeasonCode(req.body);
    newSeasonCode.save((err, seasonCode) => {
        if (err) {
            res.send(err);
        }
        res.json(seasonCode);
    });
};

export const getSeasonCodes = (req, res) => {
    SeasonCode.find({}, (err, seasonCode) => {
        if (err) {
            res.send(err);
        }
        res.json(seasonCode);
    });
};
export const addNewTag = (req, res) => {
    let newTag = new Tag(req.body);
    newTag.save((err, tag) => {
        if (err) {
            res.send(err);
        }
        res.json(tag);
    });
};

export const getTags = (req, res) => {
    Tag.find({}, (err, tag) => {
        if (err) {
            res.send(err);
        }
        res.json(tag);
    });
};
export const addNewType = (req, res) => {
    let newType = new Type(req.body);
    newType.save((err, type) => {
        if (err) {
            res.send(err);
        }
        res.json(type);
    });
};

export const getTypes = (req, res) => {
    Type.find({}, (err, type) => {
        if (err) {
            res.send(err);
        }
        res.json(type);
    });
};

export const getAllAttributes = async (req, res) => {
    try{
        const [
            brands,
            categories,
            colors,
            sizes,
            styles,
            necklines,
            sleeveLengths,
            shoulders,
            occasions,
            seasonCodes,
            tags,
            types
        ] = await Promise.all([
            Brand.find({}),
            Category.find({}),
            Color.find({}),
            Size.find({}),
            Style.find({}),
            Neckline.find({}),
            SleeveLength.find({}),
            Shoulder.find({}),
            Occasion.find({}),
            SeasonCode.find({}),
            Tag.find({}),
            Type.find({})
        ]);
      
        res.json({
            brands,
            categories,
            colors,
            sizes,
            styles,
            necklines,
            sleeveLengths,
            shoulders,
            occasions,
            seasonCodes,
            tags,
            types
        });
    } catch (err){
        res.status(500).send(err);
    }
}