import { Food } from "../classes/food";

export class DataService {
    constructor() {
        this.antipasti = [];
        this.pasta = [];
        this.secondi = [];
        this.pizza = [];
        this.contorni = [];
        this.deserts = [];
        this.kids = [];
        this.drinks = [];
    }
    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case "pasta":
                    let pasta=new Food();
                    this.pasta.push(pasta);  
                case "secondi":
                    this.secondi.push(data)
                    break;
            }
        }
    }
}