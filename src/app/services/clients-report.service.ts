import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsReportService {
  baseUrl: String = environment.baseURL;
  
  constructor(private http: HttpClient) { }

  requestReportAllClients(){
    const url = `${this.baseUrl}/clients/report`;
    return this.http.get(url);
  }

  requestReportOneClient(id?: string){
    const url = `${this.baseUrl}/clients/report/${id}`;
    return this.http.get(url);
  }

}
