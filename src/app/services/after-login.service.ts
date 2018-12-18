import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AfterLoginService {

 constructor(

    private tokenService: TokenService
  
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    
    return this.tokenService.loggedIn();
  
  }
}
