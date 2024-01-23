import { Component, OnInit } from '@angular/core';
import { Phonecase } from '../phonecase.module';
import { PhonecaseService } from '../phonecase.service';

import { Police } from '../../police/police.module';
import { PoliceService } from '../../police/police.service';

@Component({
  selector: 'app-phonecase-add',
  templateUrl: './phonecase-add.component.html',
  styleUrls: ['./phonecase-add.component.css']
})
export class PhonecaseAddComponent implements OnInit {

  addPhonecaseNameValue : string = '';
  addPhonecasePriceValue : number = 0;
  addPhonecaseQuantityValue : number = 0;
  addPhonecaseEmployeeNameValue : string = '';
  
  policeVal:Police[]=[];
  
  constructor(private policeService : PoliceService, private phonecaseService : PhonecaseService) { }
  
  ngOnInit(): void {
	this.policeService.getPolice()
			.subscribe(
				(police:any[])=>{
					this.policeVal=police
				},
			(error)=>console.log(error)
			);
  }
  
  onPhonecaseAdd(event: any){
		let phonecase: Phonecase 
			= new Phonecase(0, this.addPhonecaseNameValue, this.addPhonecasePriceValue, this.addPhonecaseQuantityValue, this.addPhonecaseEmployeeNameValue);
			
		this.phonecaseService.addPhonecase(phonecase)
			.subscribe(
				(newPolice: any)=>{
					this.addPhonecaseNameValue='';
					this.addPhonecasePriceValue=0;
					this.addPhonecaseQuantityValue=0;
					this.addPhonecaseEmployeeNameValue='';
					this.phonecaseService.onPhonecaseAdded.emit(newPolice);
				}
			);
		window.location.reload();
	}

}
