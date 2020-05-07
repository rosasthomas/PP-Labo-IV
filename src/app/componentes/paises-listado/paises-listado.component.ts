import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.scss']
})
export class PaisesListadoComponent implements OnInit {

  listadoPaises

  constructor(private servicio:ServicioPaisesService) {
    this.servicio.getPaises().subscribe(data => {
      console.log()
      this.listadoPaises = data;
    });
   }

  ngOnInit(): void {
  }

}
