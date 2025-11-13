import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrl: './participer.component.css'
})
export class ParticiperComponent {
  totalPrice: number = 0;
  eventId: number;
  pricePerPlace: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
    this.pricePerPlace = this.route.snapshot.params['prix'];
  }
  calculateTotalPrice() {

    const nbrPlaces = (document.querySelector('input[name="nbrplaces"]') as HTMLInputElement)?.value;
    if (nbrPlaces) {
      this.totalPrice = parseInt(nbrPlaces) * this.pricePerPlace;
    } else {
      this.totalPrice = 0;
    }
  }

  onSubmit() {
    if (this.p.valid) {
      const formData = this.p.value;

      this.router.navigate(['/events/participate', this.eventId, formData.nbrplaces], {
        queryParams: {
          email: formData.AdresseMail,
          totalPrice: this.totalPrice
        }
      });
    }
  }

  get p(): any {
    return (document.querySelector('form') as any)?.ngForm || {};
  }

  save() {
    console.log(this.pricePerPlace)
  }
}
