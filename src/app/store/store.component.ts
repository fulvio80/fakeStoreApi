import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  panelOpenState = false;
  products!: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(response => this.products = response)
  }

}
