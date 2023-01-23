import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  add(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}api/users`, model)
  }

  list(): Promise<any> {
    return this.http.get(`${environment.base_URL}api/users?page=2`).toPromise()
  }

  getUserById(id: any): Promise<any> {
    return this.http.get(`${environment.base_URL}api/users/${id}`).toPromise()
  }

  edit(model: any, id: any): Observable<any> {
    return this.http.put(`${environment.base_URL}api/users/${id}`, model)
  }
}
