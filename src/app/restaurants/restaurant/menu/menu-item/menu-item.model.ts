export class MenuItem {
    public name: string; //nazwa potrawy
    //public ingridients: [];
    public ingridients: string;
    public description: string;
    public price: number;
  
    constructor(name: string, price: number, desc: string, ingridients: string ) {
      this.name = name;
      this.price = price;
      this.description = desc;
      this.ingridients = ingridients;
     }
}