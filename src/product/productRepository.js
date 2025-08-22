const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductsById = async (id) => {
  const products = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return products;
};

const insertProducts = async (productData) => {
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
    await prisma.product.delete({
    where: {
      id,
    },
  });
}

const editProduct = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });
  return product;
}

module.exports = {
  findProducts,
  findProductsById,
  insertProducts,
  deleteProduct,
  editProduct,
};
