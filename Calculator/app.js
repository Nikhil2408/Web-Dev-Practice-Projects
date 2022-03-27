const allBtns = document.querySelectorAll(".container > .calc-container > .row > button");

const display = document.querySelector(".display > input[type='text']");


let currentDisplay = '';
for(let btn of allBtns)
{
    if(btn.classList.contains("operand"))
    {
        btn.addEventListener("click", function(){
            currentDisplay = currentDisplay + btn.innerText;
            display.value = currentDisplay;
        })
    }

    if(btn.classList.contains("operator"))
    {
        btn.addEventListener("click", function(){
            currentDisplay = currentDisplay + " " + btn.innerText + " ";
            display.value = currentDisplay;
        })
    }

    if(btn.classList.contains("equal"))
    {
        btn.addEventListener("click", function(){
            display.value = eval(display.value);
            currentDisplay = '';
        })
    }

    if(btn.classList.contains("reset"))
    {
        btn.addEventListener("click", function(){
            currentDisplay = '';
            display.value = 0;
        })
    }
}