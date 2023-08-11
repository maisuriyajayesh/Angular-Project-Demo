import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataEntryService {
  constructor( private _http: HttpClient) { }
  profileEntryData(data : any) : Observable<any> {
   return this._http.post('http://localhost:3000/Profile-Data-entry', data)
 }

}
