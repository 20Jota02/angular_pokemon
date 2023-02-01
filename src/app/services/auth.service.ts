import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})

export class AutoService {

private URL ='http://localhost:3000';

  constructor(private http : HttpClient ,
 private jwHelper: JwtHelperService
    ) { }

singin(user:any){
  return this.http.post(`${this.URL}/user/singin`,user);
}


isAth():boolean{
  const token =localStorage.getItem('token');
  if( this.jwHelper.isTokenExpired(token) ||   !localStorage.getItem('token')){
    return false;
  }
  return true;
}



}
