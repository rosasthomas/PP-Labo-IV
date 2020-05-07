import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  constructor(private http:HttpClient) { }

  getPaises():Observable<any>{
    return this.http.get(`http://restcountries.eu/rest/v2/region/americas`)
  }

}
