import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { CharacterComponent } from './Components/character/character.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'search', component: CharacterComponent },
  { path: '**', component: PageNotFoundComponent }, // Maneja rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
