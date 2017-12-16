import { Nutritonal } from "./nutritional";

export class Food extends Nutritonal {
    constructor(type,name,description,price,category){
        super(calories,fat,saturates,protein,salt,carbs,sugar,fibre,alergyDetails);
        this.type=type;
        this.name=name;
        this.description=description;
        this.price=price;
        this.category=category;
    }
}