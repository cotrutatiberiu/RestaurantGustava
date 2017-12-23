export class Menu {
  constructor(data) {
    let intakeData = data;
    let antipastiCon = document.getElementById("antipastiContainer");
    let pastaCon = document.getElementById("pastaContainer");
    let secondiCon = document.getElementById("secondiContainer");
    let pizzaCon = document.getElementById("pizzaContainer");

    let menuPicturesElem = document.getElementById("menupictures");

    let leftMenuNavbar = document.getElementById("leftMenu");

    let array = [antipastiCon, pastaCon, secondiCon, pizzaCon];

    for (let elem of array) {
      elem.addEventListener("click", fadeInElements);
      elem.addEventListener("click", showItems);
      elem.addEventListener("click", fadeOutNavbar);
    }

    function fadeInElements() {
      menuPicturesElem.style.display = "none";
    }
    function showItems(event) {
      this.event = event;
      leftMenuNavbar.style.display = "inline";
      switch (event.target.id) {
        case "antipastiContainer":
          intakeData.printData(intakeData.antipasti);
          // intakeData.sortData(intakeData.antipasti, "Vegan");
          break;
        case "pastaContainer":
          intakeData.printData(intakeData.pasta);
          break;
        case "secondiContainer":
          intakeData.printData(intakeData.secondi);
          break;
        case "pizzaContainer":
          intakeData.printData(intakeData.pizza);
          break;
      }
    }
    function fadeOutNavbar() {
      let liElem = document.getElementsByClassName("liclass");
      let tableElem = document.getElementById("table");
      for (let i = 0; i < liElem.length; i++) {
        switch (liElem[i].accessKey) {
          case "antipasti":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.antipasti);
            });
            break;
          case "pasta":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.pasta);
            });
            break;
          case "secondi":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.secondi);
            });
            break;
          case "pizza":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.pizza);
            });
            break;
        }
      }
    }

    //Add event listener foreach class member

    let radioElem = document.getElementsByClassName("radioButton");
    for (var i = 0; i < radioElem.length; i++) {
      radioElem[i].addEventListener("click", sortData);
    }
    function sortData() {
      switch (this.accessKey) {
        case "Vegetarian":
        intakeData.sortData(intakeData.antipasti, this.accessKey);
          break;
        case "Vegan":
          break;
        case "Gluten free":
          break;
        case "Healthy":
          break;
        case "Dairy free":
          break;
      }
    }
  }
}
