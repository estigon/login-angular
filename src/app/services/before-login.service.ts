import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  constructor(

    private tokenService: TokenService
  
  ) { }

 /* canActivate(){
  	 return !this.tokenService.loggedIn();
  }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    
    return !this.tokenService.loggedIn();
  
  }

}
