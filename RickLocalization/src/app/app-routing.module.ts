import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { HistoricoComponent } from './historico/historico.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'home',pathMatch: 'full', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'detalhes/:dimensao', component: DetalhesComponent },
  { path: 'historico/:dimensao', component: HistoricoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
