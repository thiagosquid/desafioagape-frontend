import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  usercode!: String;
  password!: String;
  error!: Message[];

  @Output()
  eventLogin = new EventEmitter();

  constructor(private service: LoginService, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  
  verifyLogin(){
    this.usercode = this.usercode.replace(".",'');
    if(this.usercode.length != 0 && this.password.length != 0){
      
      let id: number = Number(this.usercode)
      let res: any;
      this.service.verifyLogin(id.toString(), this.password).subscribe((response) =>{
        res = response;
        localStorage.setItem("userActive","true");
        this.login();
      },err => this.showMessage());

    }
  } 

  login(){
    this.eventLogin.emit();
  }

  showMessage(){
    this.error = [
      {severity:'error', summary:'Error', detail:'Código ou Senha do usuário inválida!'}
  ];
  }
  
}