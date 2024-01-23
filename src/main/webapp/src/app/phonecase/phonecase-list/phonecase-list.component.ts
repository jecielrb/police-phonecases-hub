import { Component, OnInit } from '@angular/core';
import { Phonecase } from '../phonecase.module';
import { PhonecaseService } from '../phonecase.service';

@Component({
  selector: 'app-phonecase-list',
  templateUrl: './phonecase-list.component.html',
  styleUrls: ['./phonecase-list.component.css']
})
export class PhonecaseListComponent implements OnInit{

  	phonecases:Phonecase[]=[];
	deletePhonecaseValue : string = '';
	constructor(private phonecaseService:PhonecaseService){}
	
	ngOnInit(){
		this.phonecaseService.getPhonecase()
			.subscribe(
				(phonecase:any[])=>{
					this.phonecases=phonecase
				},
			(error)=>console.log(error)
			);
			this.phonecaseService.onPhonecaseAdded
			.subscribe(
				(phonecase:Phonecase)=>this.phonecases.push(phonecase)
			);
	}
	
	onPhonecaseDelete(event: number){
		this.phonecaseService.deletePhonecaseById(event).subscribe();	
	}
	
}
