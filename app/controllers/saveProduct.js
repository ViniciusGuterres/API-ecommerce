// Requires model
const productModel = require('../models/product.js');

async function saveProduct(req, res, next) {
    // Globals
    const objReturn = {
        data: null,
        error: null,
        status: null,
    }

    if (!req.body) {
        console.log("controllers/saveProduct - missing req.body");
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
        console.log("controllers/saveProduct - missing name or wrong format");
        objReturn.error = "missing name or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!description || (typeof description != 'string')) {
        console.log("controllers/saveProduct - missing description or wrong format");
        objReturn.error = "missing description or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!price || (typeof price != 'number')) {
        console.log("controllers/saveProduct - missing price or wrong format");
        objReturn.error = "missing price or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!company || (typeof company != 'string')) {
        console.log("controllers/saveProduct - missing company or wrong format");
        objReturn.error = "missing company or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!amount || (typeof amount != 'number')) {
        console.log("controllers/saveProduct - missing amount or wrong format");
        objReturn.error = "missing amount or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    if (!brand || (typeof brand != 'string')) {
        console.log("controllers/saveProduct - missing brand or wrong format");
        objReturn.error = "missing brand or wrong format";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    // Starting creating document at mongo
    try {
        const productObj = req.body;

        // Getting the new product id
        const maxMongoProductID = await productModel.findOne({}).sort({ code: -1 });        
        productObj.code = maxMongoProductID.code == null ? 1 : maxMongoProductID.code + 1;

        const createProductResult = await productModel.create(productObj);

        objReturn.data = createProductResult;
        objReturn.status = 201;

    } catch (err) {
        console.log("controllers/saveProduct - Error to create product mongo document - ERROR: ", err);
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

exports.saveProduct = saveProduct;