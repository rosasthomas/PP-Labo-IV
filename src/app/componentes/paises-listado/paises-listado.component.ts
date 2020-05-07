import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.scss']
})
export class PaisesListadoComponent implements OnInit {

  listadoPaises
  paisDetalle

  constructor(private servicio:ServicioPaisesService) {
    this.servicio.getPaises().subscribe(data => {
      console.log()
      this.listadoPaises = data;
    });
   }

  ngOnInit(): void {
  }

  paisParaDetalle(pais:Pais){
    this.paisDetalle = pais;
  }

}
