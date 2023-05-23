import fs from "fs"
const createJsonFile = async () => {
  if (!fs.existsSync("../db/carts.json")) {
    return await fs.promises.writeFile("../db/carts.json", "[]");
  }
};

createJsonFile();

import { ProductManager } from "./productManager.js";
const productManager = new ProductManager();

export class CartManager {
    constructor() {
        this.pathCarts = "../db/carts.json";
        this.carts = [];
    };

    async getCart(idCart) {
        const cartsFile = await fs.promises.readFile(this.pathCarts, "utf-8");
        const cartsFileParse = JSON.parse(cartsFile);
        const findCart = cartsFileParse.find((cart) => cart.idCarrito == idCart);

        if (findCart) {
            return findCart
        } else {
            return false
        }
    }

    createCart(cartId) {
        const newCart = {
            idCarrito: cartId,
            productos: [],
        }
        this.carts.push(newCart)
        let newCartsString = JSON.stringify(this.carts);
        fs.writeFileSync(this.pathCarts, newCartsString);
    }

    async addItemToCart(cartId, productId) {
        const cartsFile = await fs.promises.readFile(this.pathCarts, "utf-8")
        const cartsFileParse = JSON.parse(cartsFile);
        this.carts = cartsFileParse;
        
        productId = parseInt(productId)
        cartId = parseInt(cartId)

        const allProducts = await productManager.getProducts();
        const productFound = allProducts.find((product) => product.id == productId);
        if (productFound) {
            let findCart = cartsFileParse.find((cart) => cart.idCarrito == cartId);
            
            if (!findCart) {
                this.createCart(cartId);
                findCart = cartsFileParse.find((cart) => cart.idCarrito == cartId);
            }

            const foundProductInCart = findCart.productos.find((product) => product.idProduct === productId);

            if (foundProductInCart) {
                foundProductInCart.quantity++;

                let cartsString = JSON.stringify(this.carts);
                fs.writeFileSync(this.pathCarts, cartsString);
                return true
            } else {
                const products = {
                    idProduct: productId,
                    quantity: 1,
                }
                findCart.productos.push(products)
                let cartsString = JSON.stringify(this.carts);
                fs.writeFileSync(this.pathCarts, cartsString);
                return true
            }
        } else {
            return false
        }
    }
}