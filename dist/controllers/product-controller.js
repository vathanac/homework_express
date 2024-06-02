"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProductById = exports.updateProduct = exports.createProduct = exports.getAllProducts = void 0;
const product_1 = require("../models/product");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = product_1.Product.getProducts;
    res.json({ message: "Success!!", data: products });
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.productId);
    const product = product_1.Product.getProducts.filter((product) => product.id === productId);
    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }
    res.json({ message: "Success!!", data: product });
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!(body === null || body === void 0 ? void 0 : body.name) || !(body === null || body === void 0 ? void 0 : body.price)) {
        res.status(400).json({ message: "Bad request" });
        return;
    }
    const newProduct = new product_1.Product(product_1.Product.getProducts.length + 1, body.name, body.price);
    const existingProduct = product_1.Product.getProducts.filter((product) => product.name === newProduct.name);
    if (existingProduct.length) {
        res.status(409).json({ message: "Product already exists" });
        return;
    }
    // save the new product to the list
    product_1.Product.getProducts.push(newProduct);
    res.json({ message: "Success!!", data: newProduct });
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.productId);
    const body = req.body;
    if (!(body === null || body === void 0 ? void 0 : body.name) || !(body === null || body === void 0 ? void 0 : body.price)) {
        res.status(400).json({ message: "Bad request" });
        return;
    }
    const product = product_1.Product.getProducts.filter((product) => product.id === productId);
    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }
    // update the product
    product[0].name = body.name;
    product[0].price = body.price;
    res.json({ message: "Success!!", data: product });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.productId);
    const product = product_1.Product.getProducts.filter((product) => product.id === productId);
    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }
    // delete the product
    const index = product_1.Product.getProducts.indexOf(product[0]);
    product_1.Product.getProducts.splice(index, 1);
    res.json({ message: "Success!!", data: "Deleted Product" });
});
exports.deleteProduct = deleteProduct;
