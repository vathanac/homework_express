import { Request, Response } from 'express';
import { Product } from '../models/product';

const getAllProducts = async (req: Request, res: Response) => {
    const products = Product.getProducts;
    res.json({ message: "Success!!", data: products });
};

const getProductById = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.productId);

    const product = Product.getProducts.filter(
        (product) => product.id === productId
    );

    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }

    res.json({ message: "Success!!", data: product });
};

const createProduct = async (req: Request, res: Response) => {
    const body = req.body;

    if (!body?.name || !body?.price) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const newProduct = new Product(
        Product.getProducts.length + 1,
        body.name,
        body.price
    );

    const existingProduct = Product.getProducts.filter(
        (product) => product.name === newProduct.name
    );

    if (existingProduct.length) {
        res.status(409).json({ message: "Product already exists" });
        return;
    }

    // save the new product to the list
    Product.getProducts.push(newProduct);

    res.json({ message: "Success!!", data: newProduct });

};

const updateProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.productId);
    const body = req.body;

    if (!body?.name || !body?.price) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const product = Product.getProducts.filter(
        (product) => product.id === productId
    );

    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }

    // update the product
    product[0].name = body.name;
    product[0].price = body.price;

    res.json({ message: "Success!!", data: product });
};

const deleteProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.productId);

    const product = Product.getProducts.filter(
        (product) => product.id === productId
    );

    if (!product.length) {
        res.status(404).json({ message: "Product Not Found" });
        return;
    }

    // delete the product
    const index = Product.getProducts.indexOf(product[0]);
    Product.getProducts.splice(index, 1);

    res.json({ message: "Success!!", data: "Deleted Product" });
};

export {
    getAllProducts,
    createProduct,
    updateProduct,
    getProductById,
    deleteProduct
}