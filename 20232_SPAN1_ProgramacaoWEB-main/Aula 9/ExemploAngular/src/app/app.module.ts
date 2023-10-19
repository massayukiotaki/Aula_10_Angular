import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { HomeComponent } from './home/home.component';
import { Telafilho1Component } from './tela-pai/telafilho1/telafilho1.component';
import { Telafilho2Component } from './tela-pai/telafilho2/telafilho2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListaClienteComponent,
    CalculadoraComponent,
    PaginaNaoEncontradaComponent,
    TelaPaiComponent,
    HomeComponent,
    Telafilho1Component,
    Telafilho2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
