import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

constructor (private route: Router, private ps : ProductService){}
 @Input() p: Product;

 //1-  preparer la notification à envoyer aux parent
@Output() notificationAcheter = new EventEmitter()


//2- envoyer la notification suite clique
sendDataToParent(p:Product){
  this.notificationAcheter.emit(p)
}

}
