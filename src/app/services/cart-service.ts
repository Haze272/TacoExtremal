import { Product } from "./product-service";

export class CartService {
    cart: Product[] = [];

    addToCart(product: Product) {
        this.cart.push(product);
    }

    getCart() {
        console.log(this.cart);
        return this.cart;
    }
}