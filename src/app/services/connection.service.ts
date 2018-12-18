import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

	private url: String;
	
	constructor(
		private _httpClient: HttpClient
	){
		this.url = 'http://localhost:8000/api/';
	}

	public login(data):any{
		return this._httpClient.post(this.url+'auth/login ', data);
	}

	public register(data):any{
		return this._httpClient.post(this.url+'auth/register ',data);
	}

}
