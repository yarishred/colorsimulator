//Variables DOM
const colorItems = document.querySelectorAll(".color");
const forms = document.querySelectorAll(".form");
const mainView = document.querySelector(".item-main-view");
const pickColor = document.querySelector("h4");
const resetButton = document.querySelector('.reset-btn')
const myItems = document.querySelectorAll('.item')
const detailedForm = document.querySelectorAll('.detailedForm')
// Variables
let activeColor;
let myStyle;

//Funciones
const selectColor = (element) => {
  const colorElement = getComputedStyle(element.target);
  const color = colorElement.backgroundColor;
  activeColor = color;
  pickColor.textContent = color;
};

const changeColorElement = (event) => {
  const changeColor = event.target;
  changeColor.style.backgroundColor = activeColor;
};

const resetElement = ()=>{
  mainView.innerHTML=''
}

//Eventos
colorItems.forEach((colorItem) =>
  colorItem.addEventListener("click", selectColor)
);

myItems.forEach((element, index) => {
  element.addEventListener("click", ()=> {
    element.classList.add("active");
    myItems.forEach((elmt, indx) => {
      if (index !== indx) {
        elmt.classList.remove("active");
        mainView.innerHTML = "";
      }
    });
   let newElement = element.cloneNode(true)
   newElement.style.transform = `scale(2.5)`
   newElement.addEventListener('click', (e)=>{
    e.target.style.fill = activeColor
   })
    mainView.append(newElement);
  });
});

resetButton.addEventListener('click', resetElement)

