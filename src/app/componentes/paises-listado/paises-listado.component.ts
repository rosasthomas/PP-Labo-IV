import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.scss']
})
export class PaisesListadoComponent implements OnInit {

  listadoPaises = []
  paisDetalle

  constructor(private servicio:ServicioPaisesService) {
    setTimeout(() => {
      this.listadoPaises = servicio.getPaises()
    }, 1000);
   }

  ngOnInit(): void {
  }

  paisParaDetalle(pais:Pais){
    this.paisDetalle = pais;
  }

  deshabilitarPais(pais:Pais){
    let i = this.listadoPaises.indexOf(pais);
    this.listadoPaises.splice(i, 1);
    this.servicio.deshabilitarPais(this.listadoPaises)
  }
}
