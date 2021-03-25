//Variables DOM
const colorItems = document.querySelectorAll(".color");
const forms = document.querySelectorAll(".form");
const mainView = document.querySelector(".item-main-view");
// Variables
let activeColor;
let myStyle

//Funciones
const selectColor = (element) => {
  const colorElement = getComputedStyle(element.target);
  const color = colorElement.backgroundColor;
  activeColor = color;
};

const changeColorElement = (event)=>{
    const changeColor = event.target
    changeColor.style.backgroundColor = activeColor
}

//Eventos
colorItems.forEach((colorItem) =>
  colorItem.addEventListener("click", selectColor)
);

forms.forEach((element, index) => {
  element.addEventListener("click", function (formStyle) {
    element.classList.add("active");
    forms.forEach((elmt, indx) => {
      if (index !== indx) {
        elmt.classList.remove("active");
        mainView.innerHTML = "";
      }
    });
    myStyle = document.createElement('div')
    myStyle.classList.add('detailedForm')
    myStyle.textContent = formStyle.target.innerText

    myStyle.addEventListener('click', changeColorElement)
    mainView.append(myStyle);
  });
});

