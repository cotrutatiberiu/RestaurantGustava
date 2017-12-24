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

      linkInfo.setAttribute("href", "#");
      linkInfo.setAttribute("class","infoButton");
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
      h4Elem.appendChild(spanInfo);
      linkInfo.appendChild(h4Elem);

      linkInfo.appendChild(h4Elem);

      h5Elem.appendChild(priceText);
      pElem.appendChild(descriptionText);

      /* div */
      divElem.appendChild(linkInfo);
      divElem.appendChild(h5Elem);
      divElem.appendChild(pElem);
      // divElem.appendChild(linkInfo);
      table.appendChild(divElem);

      //Creating modals
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
  createModal(setArray){
    for(var index of setArray){
      var modal=document.getElementById("myModal");
      //Create elements
      // var h3Title=document.createElement("h3");

      var h4NutritionalTitle=document.createElement("h4");
      var h4NutritionalText=document.createTextNode("Nutritional Information");

      // var pNutrutionalElement=document.createElement("p");
      // var pNutrutionalText=document.createTextNode("");

      // var pAlergyTags=document.createElement("p");
      // var pAlergyTagsText=document.createTextNode("");

      // var h4AlergyTitle=document.createElement("h4");
      // var h4AlergyText=document.createTextNode("Allergy Details");

      // var pAlergyText=document.createElement("p");
      // pAlergyText.innerHTML="asd";
      //Assign element content

      // h3Title=index.name;

      //Appending

      h4NutritionalTitle.appendChild(h4NutritionalText);
      // pNutrutionalElement.appendChild(pNutrutionalText);
      // h4AlergyTitle.appendChild(h4NutritionalText);
      // pAlergyTags.appendChild(pAlergyTagsText);

      modal.appendChild(h4NutritionalTitle);

    }
  }
}
