import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drone',
  standalone: false,
  templateUrl: './drone.component.html',
  styles: ``
})
export class DroneComponent {
  @Input() droneName = '';

  energia= 0;


  laduj() {
    this.energia = (this.energia + 5 <= 100) ? this.energia + 5 : this.energia;
  }

  getEnergiaMessage() {
    if (this.energia < 0)
      return 'Niepoprawny stan energetyczny'
    else if (this.energia <= 15)
      return 'Dron nalezy naładować, energia <= 15';
    else if (this.energia > 15 && this.energia <= 90)
      return 'Drona ma normalny poziom naladowania'
    else if (this.energia > 90)
      return 'Dron w pelni naladowany';
    else
      return '';
  }


}
