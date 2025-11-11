import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
eventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, Validators.email]),
    location: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.nullValidator]),
    organizerId : new FormControl('', [Validators.required]),
    imageUrl : new FormControl('', [Validators.required])
  });

  onSubmit(){
    
  }
}
