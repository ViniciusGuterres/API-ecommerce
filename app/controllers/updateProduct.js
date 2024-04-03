// Requires model
const productModel = require('../models/product.js');

async function updateProduct(req, res, next) {
    // Globals
    const objReturn = {
        data: null,
        error: null,
        status: null,
    }

    if (!req.params) {
        objReturn.error = "missing req.params";
        controllerReturn(objReturn, res);
        return;
    }

    const {id} = req.params;

    if (!id) {
        objReturn.error = "missing id"
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!req.body) {
        console.log("controllers/updateProduct - missing req.body");
        objReturn.error = "missing req.body";
        controllerReturn(objReturn, res);
        return;
    }

    const {
        name,
        description,
        price,
        company,
        amount,
        brand
    } = req.body;

    if (!name || (typeof name != 'string')) {
        console.log("controllers/updateProduct - missing name or wrong format");
        objReturn.error = "missing name or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!description || (typeof description != 'string')) {
        console.log("controllers/updateProduct - missing description or wrong format");
        objReturn.error = "missing description or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!price || (typeof price != 'number')) {
        console.log("controllers/updateProduct - missing price or wrong format");
        objReturn.error = "missing price or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!company || (typeof company != 'string')) {
        console.log("controllers/updateProduct - missing company or wrong format");
        objReturn.error = "missing company or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!amount || (typeof amount != 'number')) {
        console.log("controllers/updateProduct - missing amount or wrong format");
        objReturn.error = "missing amount or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!brand || (typeof brand != 'string')) {
        console.log("controllers/updateProduct - missing brand or wrong format");
        objReturn.error = "missing brand or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }
    try {
        const productObj = req.body;

        const updateProductResult = await productModel.updateOne({code: id}, productObj)

        objReturn.data = updateProductResult;
        objReturn.status = 201;

    } catch (err) {
        console.log("controllers/updateProduct - Error to update product mongo document - ERROR: ", err);
        objReturn.error = err;
        objReturn.status = 500;
    }
    finally {
        controllerReturn(objReturn, res);
    }
};

function controllerReturn(objReturn, res) {
    const { status } = objReturn;

    res.status(status).send(objReturn);
}

exports.updateProduct = updateProduct;