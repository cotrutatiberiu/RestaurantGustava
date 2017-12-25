export class Menu {
  constructor(data) {
    let intakeData = data;
    let antipastiCon = document.getElementById("antipastiContainer");
    let pastaCon = document.getElementById("pastaContainer");
    let secondiCon = document.getElementById("secondiContainer");
    let pizzaCon = document.getElementById("pizzaContainer");

    let menuPicturesElem = document.getElementById("menupictures");

    let radioElem = document.getElementsByClassName("radioButton");

    let tableElem = document.getElementById("table");

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
          callSort(intakeData.antipasti);
          intakeData.createModal(intakeData.antipasti);
          callModal();
          break;
        case "pastaContainer":
          intakeData.printData(intakeData.pasta);
          callSort(intakeData.pasta);
          break;
        case "secondiContainer":
          intakeData.printData(intakeData.secondi);
          callSort(intakeData.secondi);
          break;
        case "pizzaContainer":
          intakeData.printData(intakeData.pizza);
          callSort(intakeData.pizza);
          break;
      }
    }
    function fadeOutNavbar() {
      let liElem = document.getElementsByClassName("liclass");
      for (let i = 0; i < liElem.length; i++) {
        switch (liElem[i].accessKey) {
          case "antipasti":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.antipasti);
              callSort(intakeData.antipasti);
            });
            break;
          case "pasta":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.pasta);
              callSort(intakeData.pasta);
            });
            break;
          case "secondi":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.secondi);
              callSort(intakeData.secondi);
            });
            break;
          case "pizza":
            liElem[i].addEventListener("click", () => {
              tableElem.innerHTML = "";
              intakeData.printData(intakeData.pizza);
              callSort(intakeData.pizza);
              intakeData.createModal(intakeData.pizza);
            });
            break;
        }
      }
    }

    //Add event listener foreach class member

    function callSort(assignArray) {
      for (var i = 0; i < radioElem.length; i++) {
        radioElem[i].addEventListener("click", sortData);
      }
      function sortData() {
        switch (this.accessKey) {
          case "Vegetarian":
            tableElem.innerHTML = "";
            intakeData.sortData(assignArray, this.accessKey);
            break;
          case "Vegan":
            tableElem.innerHTML = "";
            intakeData.sortData(assignArray, this.accessKey);
            break;
          case "Gluten free":
            tableElem.innerHTML = "";
            intakeData.sortData(assignArray, this.accessKey);
            break;
          case "Healthy":
            tableElem.innerHTML = "";
            intakeData.sortData(assignArray, this.accessKey);
            break;
          case "Dairy free":
            tableElem.innerHTML = "";
            intakeData.sortData(assignArray, this.accessKey);
            break;
        }
      }
    }
    function callModal() {
      var modalContentElem = document.getElementsByClassName("myModal");
      var getButton = document.getElementsByClassName("infoButton");
      let span = document.getElementsByClassName("spana");
      for (let z = 0; z < getButton.length; z++) {
        for (let y = 0; y < modalContentElem.length; y++) {
          for (let j = 0; j < span.length; j++) {
            if (getButton[z].accessKey === modalContentElem[y].accessKey && modalContentElem[y].accessKey === span[j].accessKey) {
              getButton[z].addEventListener("click", function () {
                modalContentElem[y].style.display = "block";
              });
              span[j].addEventListener("click", () => {
                modalContentElem[y].style.display = "none";
              });
              window.addEventListener("click", function(event) {
                if (event.target == modalContentElem[y]) {
                  modalContentElem[y].style.display = "none";
                }
              })
            }

          }
        }
      }
    }
  }
}
