const bodyParser = require('body-parser');

const saveProductController = require('../controllers/saveProduct.js').saveProduct;
const getProductController = require('../controllers/getProducts.js').getProducts;

module.exports = (app) => {
    app.post('/saveProduct', bodyParser.json(), saveProductController);
    app.get('/getProducts', bodyParser.json(), getProductController);
    app.get('/getProduct/:productName', bodyParser.json(), getProductController);
}