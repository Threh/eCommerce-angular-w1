import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Áo thun nam',
      price: 150000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Quần jean nữ',
      price: 250000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Giày thể thao',
      price: 500000,
      image: 'https://via.placeholder.com/150',
    },
  ];
}
