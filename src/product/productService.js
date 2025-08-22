
const { findProducts, findProductsById, insertProducts, deleteProduct, editProduct } = require("./productRepository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductsById = async (id) => {
  const product = await findProductsById(id)

  if (!product) {
    throw Error("product not found");
  }

  return product;
};

const createProduct = async (productData) => {
  const product = await insertProducts(productData)
  return product;
};

const delProductById = async (id) => {
  await getProductsById(id);
  await deleteProduct(id)
};

const editProductById = async (id, productData) => {
  await getProductsById(id);
  const product = await editProduct(id, productData)
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  delProductById,
  editProductById,
};
