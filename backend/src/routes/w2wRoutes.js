import { addNewBrand, addNewCategory, addNewColor, addNewNeckline, addNewOccasion, addNewSeasonCode, addNewShoulder, addNewSize, addNewSleeveLength, addNewStyle, addNewTag, addNewType, getAllAttributes, getBrands, getCategories, getColors, getNecklines, getOccasions, getSeasonCodes, getShoulders, getSizes, getSleeveLengths, getStyles, getTags, getTypes } from '../controllers/attributeController.js';
import { addNewContact, deleteContact, getContacts, getContactWithID, updateContact } from '../controllers/contactController.js';
import { addProduct, getProductById, getProducts } from '../controllers/productController.js';
import { register, login, loginRequired } from '../controllers/userController.js';

const routes = (app) => {
    // Contact routes
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, loginRequired, getContacts)
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactId')
        .get(loginRequired, getContactWithID)
        .put(loginRequired, updateContact)
        .delete(loginRequired, deleteContact);


    app.route('/attributes')
        .get(getAllAttributes);

    // Brand
    app.route('/brand')
        .post(addNewBrand)
        .get(getBrands);

    // Category
    app.route('/category')
        .post(addNewCategory)
        .get(getCategories);

    // Color
    app.route('/color')
        .post(addNewColor)
        .get(getColors);

    // Size
    app.route('/size')
        .post(addNewSize)
        .get(getSizes);

    // Style
    app.route('/style')
        .post(addNewStyle)
        .get(getStyles);

    // Neckline
    app.route('/neckline')
        .post(addNewNeckline)
        .get(getNecklines);

    // SleeveLength
    app.route('/sleevelength')
        .post(addNewSleeveLength)
        .get(getSleeveLengths);

    // Shoulder
    app.route('/shoulder')
        .post(addNewShoulder)
        .get(getShoulders);

    // Occasion
    app.route('/occasion')
        .post(addNewOccasion)
        .get(getOccasions);

    // SeasonCode
    app.route('/seasoncode')
        .post(addNewSeasonCode)
        .get(getSeasonCodes);

    // Tag
    app.route('/tag')
        .post(addNewTag)
        .get(getTags);

    // Type
    app.route('/type')
        .post(addNewType)
        .get(getTypes);

    // app.route('/products')
    //     .post(addProduct)
    //     .get(getProducts)

    // app.route('/product/:id').get(getProductById)
    // Register route
    app.route('/auth/register').post(register);

    // login route
    app.route('/login').post(login);
};

export default routes;