document.addEventListener("DOMContentLoaded", function() {

console.log(Math.random()); // от 0 до 1 (не включая 1)
console.log(Math.random()* 10); // от 0 до 10;
console.log(Math.floor(6.9));

let x = Math.random()*100;
console.log(Math.floor(x));
// Math.floor округляет до целого числа в меньшую сторону

console.log("округляем до 10:",Math.ceil(9.9));
console.log(Math.ceil(9.1));
// Math.ceil округляет до целого числа в большую сторону;

console.log(Math.round(40.89));
console.log(Math.round(4.34));
// Math.round округление до целого числа по математическим канонам

function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
console.log(getRandomHexColor()); 


function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

function generateNum(){
    let randomNum = getRandomInt(1,10);
    let randomNumber = document.getElementById("randomNumber");
    randomNumber.textContent = "Случайное число " + randomNum;
} 
// getRandomInt(min, max) возвращает случайное целое число 
// в заданном диапазоне

let but = document.querySelector(".ganatate_bnt");
but.addEventListener("click", generateNum);


let section1 = document.querySelector(".section1");
let count = 1;
let gen = document.getElementById("gen");

gen.addEventListener("click", function(){
    let newB = document.createElement("div");
    newB.classList.add("box");
    newB.textContent = count;
    newB.style.backgroundColor = getRandomColor();
    section1.appendChild(newB);
    count++;
});

function getRandomColor() {
    return "#" + Math.floor(Math.random()* 16777215).toString(16);
};

const fruits = [
    "🍍",
    "🍓",
    "🍇"
]

function getRandomFruits(){
    return fruits [Math.floor(Math.random()* fruits.length)];
};

function showRandomF(){
    let randomFruit = document.getElementById("randomFruit");
    randomFruit.textContent = "ваш фрукт:" + getRandomFruits();
}

let ganatate_fruit = document.querySelector(".ganatate_fruit");
ganatate_fruit.addEventListener("click", showRandomF);

});
