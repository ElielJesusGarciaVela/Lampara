import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {
  enchufada = input<boolean>(false)
  encendida = false
  estadoLampara = output<string>();

  onApagarEncender() {
    this.encendida = !this.encendida
    this.estadoLampara.emit(this.encendida ? 'ENCENDIDA' : 'APAGADA')
  }
}
