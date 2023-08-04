import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = {
    id: 1,
    name: 'IPhone 15',
    price: 200000,
    isActive: true,
    imgUrl: '1.jpeg',
    description: 'super bir telefon',
  };
  productList = ['iphone 14', 'iphone 15', 'iphone 16'];
  products = [
    {
      id: 1,
      name: 'IPhone 14',
      price: 200000,
      isActive: true,
      imgUrl: '1.jpeg',
      description: 'super bir telefon',
    },
    {
      id: 2,
      name: 'IPhone 16',
      price: 200000,
      isActive: true,
      imgUrl: '1.jpeg',
      description: 'super bir telefon',
    },
    {
      id: 3,
      name: 'IPhone 17',
      price: 200000,
      isActive: true,
      imgUrl: '1.jpeg',
      description: 'super bir telefon',
    },
  ];
}
