// Requires model
const productModel = require('../models/product.js');

async function deleteProduct(req, res, next) {
    // Globals
    const objReturn = {
        data: null,
        error: null,
        status: null,
    };

    const {id} = req.params;

    if (!id) {
        console.log("controllers/deleteProduct - missing id");
        objReturn.error = "missing id";
        objReturn.status = 400;
        controllerReturn(objReturn, res);
        return;
    }

    try {
        // Encontra e exclui o produto com base no nome
        const deletedProduct = await productModel.findOneAndDelete({ code: id });

        if (!deletedProduct) {
            objReturn.error = "Produto não encontrado";
            objReturn.status = 404;
        } else {
            objReturn.data = deletedProduct;
            objReturn.status = 200;
        }
    } catch (err) {
        console.log("controllers/deleteProduct - Erro ao excluir produto:", err);
        objReturn.error = err;
        objReturn.status = 500;
    } finally {
        controllerReturn(objReturn, res);
    }
}

function controllerReturn(objReturn, res) {
    const { status } = objReturn;
    res.status(status).send(objReturn);
}

module.exports = { deleteProduct };
