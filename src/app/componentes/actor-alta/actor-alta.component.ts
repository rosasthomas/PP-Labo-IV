import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';
import { Actor } from 'src/app/clases/actor';
import * as $ from 'jquery'
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  listadoPaises
  id = 1
  actor = new Actor()
  paisOrigen = null
  listaActores = []

  constructor(private servicio:ServicioPaisesService) {
    setTimeout(() => {
      this.listadoPaises = servicio.getPaises()
    }, 1000);
   }

  ngOnInit(): void {
  }

  agregarPais(dato:Pais){
    this.paisOrigen = dato
  }

  agregar(){
    this.actor.id = this.id
    this.id++
    this.actor.nombre = $("#nombre").val()
    this.actor.apellido = $("#apellido").val()
    this.actor.sexo = $("#sexo").val()
    this.actor.fechaNacimiento = $("#fecha").val()
    this.actor.foto = '../../../assets/defaultActor.png'
    this.actor.paisOrigen = this.paisOrigen
    this.listaActores.push(this.actor)
    localStorage.setItem('actores', JSON.stringify(this.listaActores))
  }
}
