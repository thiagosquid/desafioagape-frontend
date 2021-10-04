import { Component, Output, OnInit } from '@angular/core';
import { MenuComponent } from './components/templates/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  title = 'desafioagape';
  
  @Output()
  userActive: boolean = false;

  ngOnInit(): void {
    this.userActive = localStorage.getItem("userActive") == "true" ? true : false;
  }

  logout(){
    this.userActive = false;
    console.log("to saindo")
  }

  login(){
    this.userActive = true;
    console.log("to entrando")
  }

}
