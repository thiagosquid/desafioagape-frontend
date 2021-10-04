import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clients } from '../components/views/cadastro/clients/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl: String = environment.baseURL;
  
  constructor(private http: HttpClient) { }

  getClients(index: number): Observable<Clients[]> {
    const page: String = `?page=${index}&size=10&sort=id`
    const url = `${this.baseUrl}/clients${page}`;
    return this.http.get<Clients[]>(url);
  }

  getAllClients(): Observable<Clients[]> {
    const url = `${this.baseUrl}/clients/all`;
    return this.http.get<Clients[]>(url);
  }

  deleteClient(id: number) {
    const url = `${this.baseUrl}/clients/${id}`;
    return this.http.delete(url).pipe();
  }

  updateClient(id: String, client: Clients){
    const url = `${this.baseUrl}/clients/${id}`;
    return this.http.put(url, client).pipe();
  }

  addClient(client: Clients){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    const url = `${this.baseUrl}/clients`;
    return this.http.post(url, client, httpOptions).pipe();
  }

}
