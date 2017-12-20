export class Menu {
  constructor(data) {
    let intakeData = data;
    let antipastiCon = document.getElementById("antipastiContainer");
    let pastaCon = document.getElementById("pastaContainer");
    let secondiCon = document.getElementById("secondiContainer");
    let pizzaCon = document.getElementById("pizzaContainer");

    let leftMenuNavbar = document.getElementById("leftMenu");

    let array = [antipastiCon, pastaCon, secondiCon, pizzaCon];

    for (let elem of array) {
      elem.addEventListener("click", fadeInElements);
      elem.addEventListener("click", fadeOutNavbar);
    }

    function fadeInElements() {
      antipastiCon.style.display = "none";
      pastaCon.style.display = "none";
      secondiCon.style.display = "none";
      pizzaCon.style.display = "none";
    }
    function fadeOutNavbar() {
      leftMenuNavbar.style.display = "inline";
      let testal = document.getElementsByClassName("test")[0];
      testal.addEventListener("click", () => {
        intakeData.printData(intakeData.pasta);
      });
    }
  }
}
