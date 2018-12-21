import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
  	private connectionService: ConnectionService
  ) { }

  ngOnInit() {
  	this.getMe();
  }

  getMe(){
  	this.connectionService.getCurrentUser().subscribe(
  		result=>{
  			console.log(result);
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

}
