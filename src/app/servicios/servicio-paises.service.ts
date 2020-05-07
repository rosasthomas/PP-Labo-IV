import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  listaPaises

  constructor(private http:HttpClient) {
    http.get(`http://restcountries.eu/rest/v2/region/americas`).subscribe((datos)=>{
      this.listaPaises = datos
    })
   }

  getPaises(){
    return this.listaPaises
  }

  deshabilitarPais(paises:Pais[]){
    this.listaPaises = paises
  }
}
