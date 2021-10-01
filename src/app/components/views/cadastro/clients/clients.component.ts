import { Component, OnInit } from '@angular/core';
import { ConfirmationService,ConfirmEventType, MessageService } from 'primeng/api';
import { ClientsService } from 'src/app/services/clients.service';
import { Clients } from './clients.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ClientsComponent implements OnInit {
  
    clients!: Clients[];
    currentPage: number = 0;
    totalRecords!: number;
    rows: number = 10;

    constructor(private service: ClientsService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

    ngOnInit() {
        this.getClients(this.currentPage);    
    }

    getClients(index: number) {
        this.service.getClients(index).subscribe((response) => {
            let data: any = response;
            this.totalRecords = data.totalElements;
            this.clients = data.content;
            this.currentPage = data.number;
        });
      }

    paginate(event: any) {
        this.currentPage = event.page;
        this.getClients(this.currentPage++);
    }

    editClient(_id: any){
        alert("editar")
    }

    deleteClient(_id: any){
        console.log(_id)
    }

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
            },
            reject: (type: any) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                    break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                    break;
                }
            }
        });
    }
    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            },
            reject: (type: any) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                    break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                    break;
                }
            }
        });
    }
}

