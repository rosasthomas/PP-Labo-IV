import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Input() input_tablaPaises:Array<any>

  constructor() { }

  ngOnInit(): void {
  }

}
