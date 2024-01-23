import { Component, OnInit } from '@angular/core';
import { Police } from '../police.module';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-police-list',
  templateUrl: './police-list.component.html',
  styleUrls: ['./police-list.component.css']
})
export class PoliceListComponent implements OnInit{

  	policeVal:Police[]=[];
	deletePoliceValue : string = '';
	constructor(private policeService:PoliceService){}
	
	ngOnInit(){
		this.policeService.getPolice()
			.subscribe(
				(police:any[])=>{
					console.log("Recieved police data", police)
					this.policeVal=police
				},
			(error)=>console.log(error)
			);
			this.policeService.onPoliceAdded
			.subscribe(
				(police:Police)=>this.policeVal.push(police)
			);
	}
	
	onPoliceDelete(event: number){
		this.policeService.deletePoliceById(event).subscribe();	
	}
}
