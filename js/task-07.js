const sliderInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${sliderInput.value}px`


sliderInput.addEventListener("input", (event) => {
    text.style.fontSize = `${sliderInput.value}px`;
   
    
});