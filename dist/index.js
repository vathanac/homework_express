"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const category_controller_1 = require("./controllers/category-controller");
const product_controller_1 = require("./controllers/product-controller");
const app = (0, express_1.default)();
// parse application/json
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
// Categories
app.route('/categories')
    .get(category_controller_1.getAllCategories)
    .post(category_controller_1.createCategory);
app.route('/categories/:categoryId')
    .get(category_controller_1.getCategoryById)
    .patch(category_controller_1.updateCategory)
    .delete(category_controller_1.deleteCategory);
// Products
app.route('/products')
    .get(product_controller_1.getAllProducts)
    .post(product_controller_1.createProduct);
app.route('/products/:productId')
    .get(product_controller_1.getProductById)
    .patch(product_controller_1.updateProduct)
    .delete(product_controller_1.deleteProduct);
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
