import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';
import { UpdateComponent } from './update/update.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {path:'' , redirectTo:'/ajout' , pathMatch: 'full'},
  {path : 'ajout' , component :AjoutComponent},
  {path : 'liste' , component : ListeComponent},
  {path : 'update/:id' , component : UpdateComponent},
  {path : '**' , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
