import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../components/views/cadastro/clients/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl: String = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getClients(index: number): Observable<Clients[]> {
    const page: String = `?page=${index}&size=10`
    const url = `${this.baseUrl}/clients${page}`;
    return this.http.get<Clients[]>(url);
  }

  deleteClient(id: number) {
    const url = `${this.baseUrl}/clients/${id}`;
    return this.http.delete(url).pipe();
  }
}
