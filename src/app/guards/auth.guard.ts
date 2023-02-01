import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoService } from 'src/app/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private autoService:AutoService,
  private router:Router ){
// comprobar si el token eiste o no


}


  canActivate():boolean{

if(!this.autoService.isAth()){
  console.log('token no valido ');
  this.router.navigate(['login']); 
  return false;
}



    return true;
  }




}
