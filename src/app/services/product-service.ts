import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    public getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('https://pet-esteban.ru/ited-api/marketplace/users/esteban/data');
    }

    constructor(private httpClient: HttpClient) {}
}

export interface Product {
    name: string;
    description: string;
    price: number;
    weight: number;
    imgUrl: string;
}
