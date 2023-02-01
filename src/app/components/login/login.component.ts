import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

user ={
  email:"juan@gmail.com",
password:"12345"

}

constructor (
  private autothservice: AutoService,
  // para poder navegar entre rutas
private router:Router
  ){ }

  login(){
console.log(this.user);
this.autothservice.singin(this.user).subscribe( (res:any) =>{
  console.log(res);
  localStorage.setItem('token',res.token);
  this.router.navigate(['poke-table']);
})
  }
}
