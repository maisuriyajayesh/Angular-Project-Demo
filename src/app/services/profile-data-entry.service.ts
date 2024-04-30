import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataEntryService {
  private baseUrl = 'http://localhost:3000';
  constructor( private _http: HttpClient) { }
  profileEntryData(data : any) : Observable<any> {
    console.log("req data ",data);
   return this._http.post(`${this.baseUrl}/Profile-Data-entry`, data)
 }

 uploadProfilePic(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('profilePic', file);

  return this._http.post(`${this.baseUrl}/upload`, formData);
}
}
