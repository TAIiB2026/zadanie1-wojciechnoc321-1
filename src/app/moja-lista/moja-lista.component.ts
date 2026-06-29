import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moja-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moja-lista.component.html',
  styles: ``
})
export class MojaListaComponent {
  elementy = ['silnik', 'skrzydlo', 'dzialko', 'sterowanie', 'znaczek'];
}
