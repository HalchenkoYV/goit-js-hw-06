const textIntput = document.querySelector('input');
const textOutput = document.querySelector("span");

// console.log(textOutput)

textIntput.addEventListener("input", (event) => {
    if (event.currentTarget.value === '') {
        textOutput.innerHTML = 'Anonymous';
    }
    else {
        textOutput.innerHTML = event.currentTarget.value;
    }
    
});

