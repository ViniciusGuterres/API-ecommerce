// Requires model
const productModel = require('../models/product.js');

async function getProducts(req, res, next) {
    // Globals
    const objReturn = {
        data: null,
        error: null,
        status: null,
    };

    // let productCodeParam = req?.params || null;
    // try {
    //     productCodeParam = JSON.parse(productCodeParam);
    // } catch (err) {
    //     console.log("controllers/getProducts - Error to parse productCodeParam JSON: ", err);
    //     objReturn.error = err;
    //     objReturn.status = 500;
    // }

    /**
     * @function controllers/getProducts/getProductByCode
     * @summary - Will get all mongo products
     */
    async function getAllProducts() {
        try {
            const getAllProductsResult = await productModel.find({});

            objReturn.data = getAllProductsResult;
            objReturn.status = 200;
        } catch (err) {
            console.log("controllers/getProducts - Error to get products mongo document - ERROR: ", err);
            objReturn.error = err;
            objReturn.status = 500;
        } finally {
            controllerReturn(objReturn, res);
        }
    }

    getAllProducts();
};

function controllerReturn(objReturn, res) {
    const { status } = objReturn;

    res.status(status).send(objReturn);
}

exports.getProducts = getProducts;