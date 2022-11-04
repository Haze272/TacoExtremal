import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() inputProduct!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
