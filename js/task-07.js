const sliderInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



sliderInput.addEventListener("input", (event) => {
    text.style.fontSize = `${sliderInput.value}px`;
   
    
});