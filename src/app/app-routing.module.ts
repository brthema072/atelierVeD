import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaFormComponent } from './agenda/agenda-form/agenda-form.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home' },
  { path:'home', component: HomeComponent },
  { path:'agenda', component: AgendaComponent },
  { path:'agenda/horaios', component: AgendaFormComponent },
  { path:'onde-estamos', component: OndeEstamosComponent },
  { path:'sobre-nos', component: QuemSomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
