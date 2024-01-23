import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter} from "@angular/core";
import { Phonecase } from "./phonecase.module"; 
@Injectable()
export class PhonecaseService{
	
	onPhonecaseAdded = new EventEmitter<Phonecase>();
	//Do a DI to initialize Http Client
	constructor(private http:HttpClient){}
	
	
	//Make a call to the web service. This will connect to the 
	//REST api we have running on localhost:8080
	getPhonecase(){
		return this.http.get<Phonecase[]>('/api/phonecase');
	}
	
	addPhonecase(phonecase: Phonecase){
		return this.http.post('/api/phonecase', phonecase);
	}
	
	getPhonecaseByName(name: any){ //any for now, String is unacceptable 
		return this.http.get<Phonecase[]>('/api/phonecase/' + name); 
	}
	
	deletePhonecaseById(id: number){
		return this.http.delete('/api/phonecase/' + id)
	}
}