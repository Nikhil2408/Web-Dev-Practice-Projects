const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelectorAll(".progress-step");
const lines = document.querySelectorAll(".line");
let circleActiveNumber = -1;
let lineActiveNumber = -1;

nextBtn.addEventListener("click", function doProgress()
{
    if(circleActiveNumber<progress.length)
    {
        circleActiveNumber++;
        if(circleActiveNumber !== progress.length - 1)
            lineActiveNumber++;
        addProgress(circleActiveNumber, lineActiveNumber);
    }
    if(circleActiveNumber > -1)
    {
        document.getElementById("prev").disabled = false;
    }
    if(circleActiveNumber === progress.length-1)
    {
        document.getElementById("next").disabled = true;
        document.getElementById("prev").disabled = false;
    }
    
});

prevBtn.addEventListener("click", function revertProgress()
{
    if(circleActiveNumber !== 0)
    {
        subtractProgress(activeNumber-1);
        activeNumber--;
    }

    if(activeNumber < progress.length)
    {
        document.getElementById("next").disabled = false;
    }
    if(activeNumber === 0)
    {
        document.getElementById("next").disabled = false;
        document.getElementById("prev").disabled = true;
    }
});


function addProgress(circleActiveNumber, lineActiveNumber)
{
    console.log("Inside addProgress method: " + circleActiveNumber, lineActiveNumber);
    progress[circleActiveNumber].classList.add("active");
    
    lines[lineActiveNumber].classList.add("active");
}

function subtractProgress(activeNumber)
{
    console.log("Inside subtractProgress method: " + activeNumber);
    progress[activeNumber].classList.remove("active");
    if(activeNumber !== 0)
        lines[activeNumber-1].classList.remove("active");
}