import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
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

  constructor(private clientsService: ClientsService) { 

  }

  ngOnInit(): void {
    this.getclients();
  }

  print(){
  }

  getclients(){
    this.clientsService.getAllClients().subscribe((response) => {
      this.clients = response;
  });;
  }
  

}
