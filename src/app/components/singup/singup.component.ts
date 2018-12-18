import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  private form = {
	name: null,
  	email: null,
  	password: null,
  	password_confirmation: null
  };

  private url: string;

  constructor(
  	private connectionService: ConnectionService,
  	private tokenService: TokenService,
  	private _router: Router
  ){
  	
  }

  ngOnInit() {

  }

  onSubmit(){
  	return this.connectionService.register(this.form).subscribe(
  		data=>{
  			this.handleResponse(data);
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

  handleResponse(data){
  	this.tokenService.handle(data.access_token);// the attribute access_token has the token
  	this._router.navigateByUrl('/profile');
  }

}
