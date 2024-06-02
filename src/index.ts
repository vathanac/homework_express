import express from 'express';
import bodyParser from 'body-parser';
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from './controllers/category-controller';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './controllers/product-controller';
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.route('/categories')
  .get(getAllCategories)
  .post(createCategory)

app.route('/categories/:categoryId')
  .get(getCategoryById)
  .patch(updateCategory)
  .delete(deleteCategory)

app.route('/products')
  .get(getAllProducts)
  .post(createProduct)

app.route('/products/:productId')
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct)

app.listen(3000, () => {
  console.log(`Listen on port 3000`)
})