const inputBox = document.querySelector("#validation-input");
// console.log(inputBox.value.length)
inputBox.addEventListener("focus", () => { })

inputBox.addEventListener("blur", () => {
    if (inputBox.value.length === 6) {
        inputBox.classList.replace('invalid','valid' )
    }
    
    else  {
        inputBox.classList.add('valid','invalid')
    }

});