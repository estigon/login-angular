import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private form = {
  	email: null,
  	password: null
  };

  private url: string;

  constructor(
  	private connectionService: ConnectionService,
  	private tokenService: TokenService,
  	private _router: Router,
  	private authService: AuthService
  ){
  
  }

  ngOnInit() {

  }

  onSubmit(){
  	return this.connectionService.login(this.form).subscribe(
  		data=>{
  			this.handleResponse(data);
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

  handleResponse(data){
  	this.tokenService.handle(data.access_token);
  	this.authService.changeAuthStatus(true);
  	this._router.navigateByUrl('/profile');
  }
  
}
