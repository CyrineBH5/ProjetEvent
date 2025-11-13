import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.css'
})
export class DrivenFormComponent {

  id: number = 5
  save(f: FormsModule) {
    console.log(f)
  }
}
