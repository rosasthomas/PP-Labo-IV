import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  listadoActores
  actorDetalle:Actor
  pais:Pais

  constructor() { 
    this.listadoActores = JSON.parse(localStorage.getItem('actores'))
  }

  ngOnInit(): void {
  }

  actorParaDetalle(actor:Actor){
    this.actorDetalle = actor
    this.pais = this.actorDetalle.paisOrigen
    console.log(this.pais)
  }

}
