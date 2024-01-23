export class Phonecase{
	public id : number;
	public name: string;
	public price: number; 
	public quantity: number;
	public employeeName: string;
	
	constructor(id : number, name: string, price: number, quantity: number, employeeName: string){
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity; 
		this.employeeName = employeeName;
	}
}