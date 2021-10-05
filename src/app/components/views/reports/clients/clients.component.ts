import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { ClientsReportService } from 'src/app/services/clients-report.service';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from '../../cadastro/clients/clients.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsReportComponent implements OnInit {

  selectedClient!: Clients;
  clients!: Clients[];

  constructor(private clientsService: ClientsService, private reportService: ClientsReportService) { 

  }

  ngOnInit(): void {
    this.getclients();
  }

  print(){
    if(this.selectedClient){
      this.reportService.requestReportOneClient(this.selectedClient.id).subscribe();
      alert("Relatório Gerado")
    }else{
      this.reportService.requestReportAllClients().subscribe();
      alert("Relatório Gerado")
    }
  }

  getclients(){
    this.clientsService.getAllClients().subscribe((response) => {
      this.clients = response;
  });;
  }
  

}
