import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { Telafilho1Component } from './tela-pai/telafilho1/telafilho1.component';
import { Telafilho2Component } from './tela-pai/telafilho2/telafilho2.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'calculadora', component: CalculadoraComponent },
  { path:'home', component: HomeComponent },
  { path:'lista-cliente', component: ListaClienteComponent },
  { path:'tela-pai', component: TelaPaiComponent,
  children: [
    { path: 'tela-filho1', component: Telafilho1Component },
    { path: 'tela-filho2', component: Telafilho2Component },
  ] },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
