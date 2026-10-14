import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './components/lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lampara';

  enchufado = false;
  estadoLampara = '';
  enchufeButton = output();

  onClickDesenchufar() {
    this.enchufado = false
  }

  onClickEnchufar(){
    this.enchufado = true
  }

  onCambioEstadoLampara(estado: string){
    this.estadoLampara = estado
  }
}
