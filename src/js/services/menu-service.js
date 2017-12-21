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
      let testal = document.getElementsByClassName("liclass");
      let test = document.getElementById("table");
      for (let i = 0; i < testal.length; i++) {
        switch (testal[i].accessKey) {
          case "antipasti":
            testal[i].addEventListener("click", () => {
              test.innerHTML = "";
              intakeData.printData(intakeData.antipasti);
            });
            break;
          case "pasta":
            testal[i].addEventListener("click", () => {
              test.innerHTML = "";
              intakeData.printData(intakeData.pasta);
            });
            break;
          case "secondi":
            testal[i].addEventListener("click", () => {
              test.innerHTML = "";
              intakeData.printData(intakeData.secondi);
            });
            break;
          case "pizza":
            testal[i].addEventListener("click", () => {

              test.innerHTML = "";
              intakeData.printData(intakeData.pizza);
            });
            break;
        }
      }
    }
  }
}
