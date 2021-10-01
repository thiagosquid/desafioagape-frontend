import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/templates/header/header.component";
import { HomeComponent } from "./components/views/home/home.component";
import { ClientsService } from "./services/clients.service";
import { ClientsComponent } from './components/views/cadastro/clients/clients.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { LoginComponent } from "./components/views/login/login.component";
import { LoginService } from "./components/views/login/login.service";


import { AccordionModule } from "primeng/accordion";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputMaskModule } from "primeng/inputmask";
import { HttpClientModule } from "@angular/common/http";
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, LoginComponent, MenuComponent, ClientsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputMaskModule,
    HttpClientModule,
    ToolbarModule,
    PanelMenuModule,
    SidebarModule,
    TableModule,
    PaginatorModule,
    ConfirmDialogModule
  ],
  providers: [LoginService, ClientsService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
