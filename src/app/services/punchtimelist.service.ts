import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunchtimelistService {

  constructor( private _http: HttpClient) { }
   addDailyPuchData(data : any) : Observable<any> {
    return this._http.post('http://localhost:3000/Profile-Data-entry', data)
  }
}
