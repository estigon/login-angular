import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  private iss = {
	login: 'http://localhost:8000/api/auth/login',
	signup: 'http://localhost:8000/api/auth/signup'
  };	

  constructor() { }

  handle(token){
  	this.set(token);
  	//console.log(this.payload(token));
  }

  set(token){
  	localStorage.setItem('token', token);
  }

  get(){
  	return localStorage.getItem('token');
  }

  remove(){
  	localStorage.removeItem('token');
  }

  isValid(){
  	const token = this.get();
  	if(token){
  		const payload = this.payload(token);
  		if(payload){
  			return Object.values(this.iss).indexOf(payload.iss) > -1? true : false;
  		}
  	}
  	return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
