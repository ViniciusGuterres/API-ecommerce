const productModel = require('../models/product.js');

async function getProductByName(req, res) {
  const name = req.query.name;
  try {
    if (!name) {
      return res.status(400).json({ message: 'Parâmetro de nome ausente na query string' });
    }
    const products = await productModel.find({ name });

    if (!products || products.length === 0) {
      const objReturn = { message: 'Produto não encontrado', status: 404 };
      controllerReturn(objReturn, res);
    } else {
      const objReturn = { data: products, status: 200 };
      controllerReturn(objReturn, res);
    }
  } catch (error) {
    const objReturn = { error: 'Erro ao buscar o produto', status: 500 };
    controllerReturn(objReturn, res);
  }
}

function controllerReturn(objReturn, res) {
  const { status } = objReturn;
  res.status(status).send(objReturn);
}

module.exports = { getProductByName };