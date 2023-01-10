import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo: string = "Data Binding Interpolation";
  evento: boolean = true;
  texto: string =
    'El two-way data binding mantiene su página actualizada automáticamente según el estado de su aplicación. Utiliza el enlace de datos para especificar cosas como la fuente de una imagen, el estado de un botón o los datos de un usuario en particular.';

  ver() {
    this.evento = !this.evento;
  }
}
