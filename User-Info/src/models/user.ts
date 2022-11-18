export class User{
    public id:number;
    public amount:number|null|undefined;
    public date:Date|null|undefined;
    public status:string|null|undefined;
    public fund:string|null|undefined;
    public pic?:any;
    
    constructor(){
        this.id = 0;
        this.amount = 0;
        this.date = new Date();
        this.fund = '';
        this.status = 'Open to Work';
        this.pic = '';
    }
}