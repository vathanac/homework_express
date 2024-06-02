"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Category = Category;
// mockdata for testing
Category.getCategories = [
    new Category(1, 'Electronics'),
    new Category(2, 'Clothing'),
    new Category(3, 'Shoes'),
    new Category(4, 'Books')
];
