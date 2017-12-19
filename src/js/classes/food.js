import { Nutritional } from "./nutritional";

export class Food extends Nutritional {
    constructor(calories,fat,saturates,protein,salt,carbs,sugar,fibre,alergyDetails,tag,type,name,description,price,category){
        super(calories,fat,saturates,protein,salt,carbs,sugar,fibre,alergyDetails,tag);
        this.type=type;
        this.name=name;
        this.description=description;
        this.price=price;
        this.category=category;
    }
}