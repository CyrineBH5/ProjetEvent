import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: any = {
    name: new FormGroup('', [Validators.required]),
    price: new FormGroup('', [Validators.required]),
    description: new FormGroup('', [Validators.required]),
    quantity: new FormGroup('', [Validators.required]),
    image: new FormGroup('', [Validators.required])
  }
  constructor(private ps: ProductService, private route: Router) {
    {
      
    }
  }
  saveProduct() {
    this.ps.addProduct(this.productForm).subscribe(res => {
      console.log("Product added successfully", res);
      this.route.navigate(['/products']);
    },
      (error) => {
        console.log("Error adding product", error);
      });
  }
}
