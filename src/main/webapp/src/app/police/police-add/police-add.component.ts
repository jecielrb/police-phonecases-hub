import { Component, OnInit } from '@angular/core';
import { Police } from '../police.module';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-police-add',
  templateUrl: './police-add.component.html',
  styleUrls: ['./police-add.component.css']
})
export class PoliceAddComponent implements OnInit {

  	addPoliceValue:string='';
	
	constructor(private policeService:PoliceService){}
	
	ngOnInit():void{
	}
	
	onPoliceAdd(event: any){
		let police: Police 
			= new Police(0, this.addPoliceValue);
			
		this.policeService.addPolice(police)
			.subscribe(
				(newPolice: any)=>{
					this.addPoliceValue='';
				}
			);
		window.location.reload();
	}
}
