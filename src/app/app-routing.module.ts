import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/templates/menu/menu.component';
import { ClientsComponent } from './components/views/cadastro/clients/clients.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent  
  },
  {
    path: "clientes",
    component: ClientsComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
