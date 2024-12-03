export class Donation{
    public id:number;
    public name:string;
    public donationAmount:number;
    public blessing:string;

    constructor(id:number,name:string,donationAmount:number,blessing:string){
        this.id=id;
        this.name=name;
        this.donationAmount=donationAmount;
        this.blessing=blessing;
    }
}