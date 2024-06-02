"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
// mockdata for testing
Product.getProducts = [
    new Product(1, 'Macbook Pro', 2000),
    new Product(2, 'Iphone 12', 1000),
    new Product(3, 'Samsung Galaxy S21', 900),
    new Product(4, 'Google Pixel 5', 800)
];
