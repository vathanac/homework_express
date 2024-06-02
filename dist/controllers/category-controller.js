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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
const category_1 = require("../models/category");
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = category_1.Category.getCategories;
    res.json({ message: "Successs!!", data: categories });
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.categoryId);
    const category = category_1.Category.getCategories.filter((category) => category.id === categoryId);
    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }
    res.json({ message: "Success!!", data: category });
});
exports.getCategoryById = getCategoryById;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!(body === null || body === void 0 ? void 0 : body.name)) {
        res.status(400).json({ message: "Bad request" });
        return;
    }
    const newCategory = new category_1.Category(category_1.Category.getCategories.length + 1, body.name);
    const existingCategory = category_1.Category.getCategories.filter((category) => category.name === newCategory.name);
    if (existingCategory.length) {
        res.status(409).json({ message: "Category already exists" });
        return;
    }
    // save the new category to the list
    category_1.Category.getCategories.push(newCategory);
    res.json({ message: "Category created successfully", data: newCategory });
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.categoryId);
    const body = req.body;
    if (!(body === null || body === void 0 ? void 0 : body.name)) {
        res.status(400).json({ message: "Bad request" });
        return;
    }
    const category = category_1.Category.getCategories.filter((category) => category.id === categoryId);
    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }
    category[0].name = body.name;
    res.json({ message: "Category updated successfully", data: category });
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.categoryId);
    const category = category_1.Category.getCategories.filter((category) => category.id === categoryId);
    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }
    const index = category_1.Category.getCategories.indexOf(category[0]);
    category_1.Category.getCategories.splice(index, 1);
    res.json({ message: "Category deleted successfully", data: "Deleted" });
});
exports.deleteCategory = deleteCategory;
