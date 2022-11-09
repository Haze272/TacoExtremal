import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service';
import { Product } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() inputProduct!: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.inputProduct);
  }
}
