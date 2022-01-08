const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelectorAll(".progress-step");
const lines = document.querySelectorAll(".line");
let circleActiveNumber = -1;
let lineActiveNumber = -1;

nextBtn.addEventListener("click", function doProgress()
{
    if(circleActiveNumber !== progress.length-1)
    {
        circleActiveNumber++;
        addCircleProgress(circleActiveNumber);
    }
    if(lineActiveNumber !== lines.length-1)
    {
        lineActiveNumber++;
        addLineProgress(lineActiveNumber);
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
    if(circleActiveNumber !== -1)
    {
        subtractCircleProgress(circleActiveNumber);
        circleActiveNumber--;
    }
    if(lineActiveNumber !== -1)
    {
        subtractLineProgress(lineActiveNumber);
        lineActiveNumber--;
    }

    if(circleActiveNumber < progress.length-1)
    {
        document.getElementById("next").disabled = false;
    }
    if(circleActiveNumber === -1)
    {
        document.getElementById("next").disabled = false;
        document.getElementById("prev").disabled = true;
    }
});


function addCircleProgress(circleActiveNumber)
{
    console.log("addCircleProgress " + circleActiveNumber);
    progress[circleActiveNumber].classList.add("active");
}

function addLineProgress(lineActiveNumber)
{
    console.log("addLineProgress " + lineActiveNumber);
    lines[lineActiveNumber].classList.add("active");
}

function subtractCircleProgress(circleActiveNumber)
{
    console.log("subtractCircleProgress " + circleActiveNumber);
    progress[circleActiveNumber].classList.remove("active");
}

function subtractLineProgress(lineActiveNumber)
{
    console.log("subtractLineProgress " + lineActiveNumber);
    lines[lineActiveNumber].classList.remove("active");
}