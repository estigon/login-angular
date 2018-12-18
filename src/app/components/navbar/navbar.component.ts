import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  	this.authService.authStatus$.subscribe(
  		result=>{
  			this.loggedIn = result;
  			console.log('soy la subscripcion al observable del BehaviorSubject '+result);
  		}
  	);
  }

//me
  logOut(){
  	this.tokenService.remove();
  	this.authService.changeAuthStatus(false);
  	this.router.navigateByUrl('/login');
  }

}
