
var number = document.querySelector('span');
// number.textContent = ''

let counterValue = 0;
const button1 = document.querySelector('button[data-action="decrement"]');
const button2 = document.querySelector('button[data-action="increment"]');



const handleClick1 = event => {
    counterValue -= 1;
    console.log(counterValue);
    number.innerHTML = counterValue;
};
const handleClick2 = event => {
    counterValue += 1;
    console.log(counterValue);
    number.innerHTML = counterValue;
};

button1.addEventListener("click", handleClick1);
button2.addEventListener("click", handleClick2);



number.innerHTML = counterValue;
//  number.insertAdjacentHTML("afterbegin", counterValue);