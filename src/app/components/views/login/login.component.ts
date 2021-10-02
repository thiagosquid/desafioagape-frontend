import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usercode!: String;
  password!: String;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }
  
  verifyLogin(){
    this.usercode = this.usercode.replace(".",'');
    console.log(this.usercode)
    if(this.usercode.length != 0 && this.password.length != 0){
      
      let id: number = Number(this.usercode)
      let res: any;
      this.service.verifyLogin(id.toString(), this.password).subscribe((response) =>{
        res = response;
        console.log(res)
      },err => res = false);

    }
  }    
}