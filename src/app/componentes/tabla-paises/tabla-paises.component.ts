import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Input() input_tablaPaises:Array<any>
  @Output() output_tablaPaises:EventEmitter<any> = new EventEmitter<any>()
  @Input() boton_tablaPaises:boolean

  constructor() { }

  ngOnInit(): void {
  }

  detalles(pais:Pais){
    this.output_tablaPaises.emit(pais);
  }
}
