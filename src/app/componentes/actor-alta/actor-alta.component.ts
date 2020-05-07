import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  listadoPaises

  constructor(private servicio:ServicioPaisesService) {
    setTimeout(() => {
      this.listadoPaises = servicio.getPaises()
    }, 1000);
   }

  ngOnInit(): void {
  }

  evento(dato:any){
    
  }
}
