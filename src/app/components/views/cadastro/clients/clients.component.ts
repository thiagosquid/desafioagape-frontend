import { Component, OnInit } from '@angular/core';
import { ConfirmEventType, MessageService, ConfirmationService } from 'primeng/api';
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
        this.confirm1();
    }

    deleteClient(_id: any){
        this.service.deleteClient(_id).subscribe(sucess => this.ngOnInit())
    }

    confirm1() {

        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({severity:'info', summary:'Confirmado', detail:'Usuário deletado'});
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
    confirm2(_id: any, name: string) {
        this.confirmationService.confirm({
            message: `Tem certeza que deseja deletar o cliente ${name}`,
            header: 'Confirmação de Delete',
            icon: 'pi pi-info-circle',
            accept: () => this.deleteClient(_id),
            
            // reject: (type: any) => {
            //     switch(type) {
            //         case ConfirmEventType.REJECT:
            //             this.messageService.add({severity:'error', summary:'Rejeitado', detail:'Você rejeitou'});
            //         break;
            //         case ConfirmEventType.CANCEL:
            //             this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Você cancelou'});
            //         break;
            //     }
            // }
        });
    }
}

function reject(arg0: { message: string; header: string; icon: string; accept: void; }, reject: any, arg2: (type: any) => void) {
    throw new Error('Function not implemented.');
}

