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

onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('Formulaire soumis:', this.eventForm.value);
      // Traitement de la soumission du formulaire
    } else {
      // Marquer tous les champs comme touched pour afficher les erreurs
      Object.keys(this.eventForm.controls).forEach(key => {
        this.eventForm.get(key)?.markAsTouched();
      });
    }
  }
}
