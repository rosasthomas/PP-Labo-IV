import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() input_detallesPais:Pais;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.input_detallesPais = null;
  }
}
