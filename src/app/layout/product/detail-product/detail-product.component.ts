import { Component } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
  product: any;
  constructor(private Act: ActivatedRoute, private productS: ProductService) {
    this.productS.getProductById(this.Act.snapshot.params['id']).subscribe(data => {
      this.product = data;
      console.log(data);
    });
  }
  ngOnInit() {
    const id = this.Act.snapshot.params['id'];
    console.log(id);

  }
}
