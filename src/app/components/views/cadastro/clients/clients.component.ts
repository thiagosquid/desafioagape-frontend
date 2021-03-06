import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    display: boolean = false;
    id?: string;
    name!: string;
    cpf!: string;
    rg!: string;
    birthdate?: string;
    address?: string;
    complement?: string;
    district!: string;
    cep!: string;
    city!: string;
    uf!: string;
    phone?: string;
    cellphone!: string;
    observation?: string;
    date!: Date;

    title!: string;
    maxDate!: Date;
    minDate: Date =  new Date(1950, 0, 1,0,0,0,0);
    myYearRange!: string;
    isEditing: boolean = false;


    constructor(private service: ClientsService, private confirmationService: ConfirmationService, private messageService: MessageService) {
        
    }
    
    ngOnInit() {        
        this.maxDate = new Date();
        this.myYearRange = `${this.minDate.getFullYear()}:${this.maxDate.getFullYear()}`;
        this.maxDate.setHours(0,0,0,0);
        this.getClients(this.currentPage);    
    }

    setAction(): any{

        let clientToSave: Clients = new Clients(
            "",
            this.name,
            this.cpf,
            this.rg,
            this.birthdate = this.date.toLocaleDateString(),
            this.address == undefined ? "" : this.address,
            this.complement == undefined ? "" : this.complement,
            this.district,
            this.cep,
            this.city,
            this.uf,
            this.phone == undefined ? "" : this.phone,
            this.cellphone,
            this.observation == undefined ? "" : this.observation);

            

        if(this.isEditing){
            this.updateClient(this.id?.replace(".",""), clientToSave);
        }else{
            console.log(this.date);
            console.log(this.birthdate);
            this.addClient(clientToSave);
        }
        this.display = false;

        
    }

    updateClient(id: any, client: Clients){
        this.service.updateClient(id, client).subscribe(sucess => this.ngOnInit())
    }

    addClient(client: Clients){
        this.service.addClient(client).subscribe(sucess => this.ngOnInit());
    }

    getClients(index: number) {
        this.service.getClients().subscribe((response) => {
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

    editClient(clientSelected: Clients){
        this.title = "Edi????o de Cliente"
        this.isEditing = true;
        this.edit(clientSelected);
    }

    deleteClient(_id: any){
        this.service.deleteClient(_id).subscribe(sucess => this.ngOnInit())
    }

    edit(clientSelected: any) {
        this.display = false;

        this.confirmationService.confirm({
            message: `Tem certeza que deseja editar o cliente ${clientSelected.name}?`,
            header: 'Confirma????o',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const dateClient = clientSelected.birthdate.split("\/");
                this.date = new Date(dateClient[2], dateClient[0]-1, dateClient[1]);
                this.id = this.pad(clientSelected.id);
                this.name = clientSelected.name;
                this.cpf = clientSelected.cpf;
                this.address = clientSelected.address;
                this.rg = clientSelected.rg;
                this.complement = clientSelected.complement;
                this.district = clientSelected.district;
                this.cep = clientSelected.cep;
                this.city = clientSelected.city;
                this.uf = clientSelected.uf;
                this.phone = clientSelected.phone;
                this.cellphone = clientSelected.cellphone;
                this.observation = clientSelected.observation;

                this.display = true;
                // this.messageService.add({severity:'info', summary:'Confirmado', detail:'Usu??rio Editado'});
            }
        //     reject: (type: any) => {
        //         switch(type) {
        //             case ConfirmEventType.ACCEPT:
        //                 this.messageService.add({severity:'error', summary:'Aceito', detail:'Voc?? editou!'});
        //             break;
        //             case ConfirmEventType.CANCEL:
        //                 this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Voc?? cancelou a edi????o'});
        //             break;
        //             case ConfirmEventType.REJECT:
        //                 this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Voc?? cancelou a edi????o'});
        //             break;
        //         }
        //     }
        });
    }
    delete(_id: any, name: string) {
        this.confirmationService.confirm({
            message: `Tem certeza que deseja deletar o cliente ${name}`,
            header: 'Confirma????o de Delete',
            icon: 'pi pi-info-circle',
            accept: () => this.deleteClient(_id),
            
            // reject: (type: any) => {
            //     switch(type) {
            //         case ConfirmEventType.REJECT:
            //             this.messageService.add({severity:'error', summary:'Rejeitado', detail:'Voc?? rejeitou'});
            //         break;
            //         case ConfirmEventType.CANCEL:
            //             this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Voc?? cancelou'});
            //         break;
            //     }
            // }
        });
    }

    showDialog(client: Clients){
        this.editClient(client);
    }
    
    newClient(){
        this.title = "Novo Cliente"
        this.isEditing = false;
        this.display = true;
        this.date = new Date();
        this.id = ""; 
        this.name = "";
        this.cpf = "";
        this.address = "";
        this.rg = "";
        this.complement = "";
        this.district = "";
        this.cep = "";
        this.city = "";
        this.uf = "";
        this.phone = "";
        this.cellphone = "";
        this.observation = "";

    }

    pad(value: string){
        return  ("000000" + value).slice(-6).slice(0,3)+"."+("000000" + value).slice(-3)
    }

    filter(){

    }
    
}



