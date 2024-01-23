import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter} from "@angular/core";
import { Police } from "./police.module"; 
@Injectable()
export class PoliceService{
	
	onPoliceAdded = new EventEmitter<Police>();
	//Do a DI to initialize Http Client
	constructor(private http:HttpClient){}
	
	
	//Make a call to the web service. This will connect to the 
	//REST api we have running on localhost:8080
	getPolice(){
		return this.http.get<Police[]>('/api/police');
	}
	
	addPolice(police: Police){
		return this.http.post('/api/police', police);
	}
	
	getPoliceByName(name: any){ //any for now, String is unacceptable 
		return this.http.get<Police[]>('/api/police/' + name); 
	}
	deletePoliceById(id: number){
		return this.http.delete('/api/police/' + id)
	}
	
}