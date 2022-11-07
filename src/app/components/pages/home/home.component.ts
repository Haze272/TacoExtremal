import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpClient]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {
     //this.products = productService.getProducts();
     this.httpClient.get<Product[]>('https://pet-esteban.ru/ited-api/marketplace/users/esteban/data')
     .subscribe((res) => {
      this.products = res;
     })
  }

  ngOnInit(): void {
  }

}
