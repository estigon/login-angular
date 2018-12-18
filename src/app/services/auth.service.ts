import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public loggedIn = new BehaviorSubject <boolean>(this.tokenService.loggedIn());
  public authStatus$ = this.loggedIn.asObservable();

  changeAuthStatus(value){
  	this.loggedIn.next(value);
  }

  constructor(
  	private tokenService: TokenService
  ) {}
}
