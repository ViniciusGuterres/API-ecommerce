const bodyParser = require('body-parser');

const saveProductController = require('../controllers/saveProduct.js').saveProduct;
const getProductController = require('../controllers/getProducts.js').getProducts;
const deleteProductController = require('../controllers/deleteProduct.js').deleteProduct; 
const updateProductController = require('../controllers/updateProduct.js').updateProduct;
const getProductByNameController = require('../controllers/getProductByName.js').getProductByName;

module.exports = (app) => {
    app.post('/saveProduct', bodyParser.json(), saveProductController);
    app.get('/getProducts', bodyParser.json(), getProductController);
    app.get('/getProduct/:productName', bodyParser.json(), getProductController);
    app.delete('/deleteProduct/:id', bodyParser.json(), deleteProductController);
    app.put('/updateProduct/:id', bodyParser.json(), updateProductController);
    app.get('/getProductByName', getProductByNameController);
}
