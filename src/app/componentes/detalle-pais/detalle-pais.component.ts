import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() input_detallesPais:Pais;
  @Output() output_detallePais:EventEmitter<any> = new EventEmitter<any>()
  @Input() deshabilitar_detallePais:boolean;

  constructor() {
    setTimeout(() => {
      
    }, 2000);
   }

  ngOnInit(): void {
  }

  limpiar(){
    this.input_detallesPais = null;
  }

  deshabilitar(pais:Pais){
    this.output_detallePais.emit(pais)
  }
}
