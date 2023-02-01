import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [


  {path: 'login', component:LoginComponent},
   {path: 'home', component:PokeTableComponent,canActivate:[AuthGuard ]},

   {path: 'pokeDetail/:id', component:PokeDetailComponent,canActivate:[AuthGuard ]},

   {path: '', pathMatch:'full',redirectTo:'home'},
   {path: '**', pathMatch:'full',redirectTo:'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
