const products = require("../data/products.json");
const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: `${products.length + 1}`, ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);

    const updatedProduct = { id, ...product };
    products[index] = updatedProduct;
    writeDataToFile("./data/products.json", products);
    resolve(updatedProduct);
  });
}

function deleteP(id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);

    products.splice(index, 1);
    writeDataToFile("./data/products.json", products);
    resolve(products);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteP,
};
