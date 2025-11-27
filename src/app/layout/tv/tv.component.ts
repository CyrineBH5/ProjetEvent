import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {

  listProducts: Product[] = [];
  searchTerm: string = '';
  ngOnInit() {

  }
  constructor(private ps: ProductService) {
    this.ps.getAllproducts().subscribe(data => {
      this.listProducts = data;
      console.log(this.listProducts);
    },
      (error) => { console.log(error) });
  }
  buy(p: Product) {
  }
}
