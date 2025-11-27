import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../shared/service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  selectedProductType: string = '';
  constructor(private ps: ProductService, private route: Router) {
    this.ps.getAllproducts().subscribe(data => {
      console.log(data);
    },
      (error) => { console.log(error) });
  }

  redirectToAdd() {
    this.route.navigate(['/products/add-product']);
  }
}
