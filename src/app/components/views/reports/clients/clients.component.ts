import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';

interface Clients {
  name: string,
  code: string
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsReportComponent implements OnInit {

  selectedClient!: Clients;
  clients!: Clients[];

  constructor() { 

    this.clients = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
  ];
  }

  ngOnInit(): void {
  }

  print(){
    
  }
  

}
