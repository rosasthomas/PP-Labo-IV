import { Component, OnInit,Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.scss']
})
export class ActorDetalleComponent implements OnInit {

  @Input() input_detallesActor:Actor;


  constructor() { 
    console.log('actor:' + this.input_detallesActor)
  }

  ngOnInit(): void {
  }

  limpiar(){
    this.input_detallesActor = null;
  }

}
