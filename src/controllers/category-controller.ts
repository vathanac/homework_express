import { Request, Response } from 'express';
import { Category } from '../models/category';

const getAllCategories = async (req: Request, res: Response) => {
    const categories = Category.getCategories;
    res.json({ message: "Successs!!", data: categories });
};

const getCategoryById = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId);

    const category = Category.getCategories.filter(
        (category) => category.id === categoryId
    );

    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }

    res.json({ message: "Success!!", data: category });
};

const createCategory = async (req: Request, res: Response) => {
    const body = req.body;

    if (!body?.name) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const newCategory = new Category(
        Category.getCategories.length + 1,
        body.name
    );

    const existingCategory = Category.getCategories.filter(
        (category) => category.name === newCategory.name
    );

    if (existingCategory.length) {
        res.status(409).json({ message: "Category already exists" });
        return;
    }

    // save the new category to the list
    Category.getCategories.push(newCategory);

    res.json({ message: "Category created successfully", data: newCategory });
};

const updateCategory = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId);
    const body = req.body;

    if (!body?.name) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const category = Category.getCategories.filter(
        (category) => category.id === categoryId
    );

    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }

    category[0].name = body.name;

    res.json({ message: "Category updated successfully", data: category });
};

const deleteCategory = async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId);

    const category = Category.getCategories.filter(
        (category) => category.id === categoryId
    );

    if (!category.length) {
        res.status(404).json({ message: "Category Not Found" });
        return;
    }

    const index = Category.getCategories.indexOf(category[0]);
    Category.getCategories.splice(index, 1);

    res.json({ message: "Category deleted successfully", data: "Deleted" });
};

export {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}