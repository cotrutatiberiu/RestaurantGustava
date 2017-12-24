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
    let table = document.getElementById("table");
  }
  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "antipasti":
          let antipasti = this.loadFood(data);
          this.antipasti.push(antipasti);
          break;
        case "pasta":
          let pasta = this.loadFood(data);
          this.pasta.push(pasta);
          break;
        case "secondi":
          let secondi = this.loadFood(data);
          this.secondi.push(secondi);
          break;
        case "pizza":
          let pizza = this.loadFood(data);
          this.pizza.push(pizza);
          break;
      }
    }
  }
  loadFood(data) {
    let food = new Food(
      data.calories,
      data.fat,
      data.saturates,
      data.protein,
      data.salt,
      data.carbs,
      data.sugar,
      data.fibre,
      data.alergyDetails,
      data.tag,
      data.type,
      data.name,
      data.description,
      data.price,
      data.category
    );
    return food;
  }
  printData(element) {
    for (let elem of element) {
      //Creating elements

      var divElem = document.createElement("div");
      var h4Elem = document.createElement("h4");
      var h5Elem = document.createElement("h5");
      var pElem = document.createElement("p");

      var linkInfo = document.createElement("a");
      var spanInfo = document.createElement("span");
      spanInfo.className = "glyphicon glyphicon-info-sign";

      //Style elements
      h4Elem.style.color = "white";
      h5Elem.style.color = "white";
      pElem.style.color = "white";

      //Assign element content
      var titleText = document.createTextNode(elem.name);
      var priceText = document.createTextNode(elem.price);
      var descriptionText = document.createTextNode(elem.description);

      //Appending elements
      h4Elem.appendChild(titleText);
      h4Elem.appendChild(linkInfo);
      h5Elem.appendChild(priceText);
      pElem.appendChild(descriptionText);

      linkInfo.appendChild(spanInfo);

      /* div */
      divElem.appendChild(h4Elem);
      divElem.appendChild(h5Elem);
      divElem.appendChild(pElem);
      // divElem.appendChild(linkInfo);
      table.appendChild(divElem);
    }
  }
  sortData(selectedArray, filter) {
    for (var lookfor of selectedArray) {
      for (var search of lookfor.tag) {
        if (search === filter) {
          // console.log(lookfor);
          var divElem = document.createElement("div");
          var h4Elem = document.createElement("h4");
          var h5Elem = document.createElement("h5");
          var pElem = document.createElement("p");

          var linkInfo = document.createElement("a");
          var spanInfo = document.createElement("span");
          spanInfo.className = "glyphicon glyphicon-info-sign";

          //Style elements
          h4Elem.style.color = "white";
          h5Elem.style.color = "white";
          pElem.style.color = "white";

          //Assign element content
          var titleText = document.createTextNode(lookfor.name);
          var priceText = document.createTextNode(lookfor.price);
          var descriptionText = document.createTextNode(lookfor.description);

          //Appending elements
          h4Elem.appendChild(titleText);
          h5Elem.appendChild(priceText);
          pElem.appendChild(descriptionText);

          linkInfo.appendChild(spanInfo);

          /* div */
          divElem.appendChild(h4Elem);
          divElem.appendChild(h5Elem);
          divElem.appendChild(pElem);
          divElem.appendChild(linkInfo);
          table.appendChild(divElem);
        }
      }
    }
  }
}
