const movieSelected = document.querySelector("#movies");
const seats = document.querySelectorAll(".seat");
const displayElement = document.querySelector(".main-container > .displayPrice > h3");

if(localStorage.getItem("seatsStored"))
{
    const seatsStored = localStorage.getItem("seatsStored").replaceAll("[", "").replaceAll("]", "").split(",");

    seatsStored.forEach(function(seatStored){
        seats[parseInt(seatStored)].classList.toggle("selected");
    });
}

let seatsSelectedCount = 0;
let seatsSelected;
let totalPrice = 0;
seats.forEach(function(seat){
    seat.addEventListener("click", function(){
        if(!seat.classList.contains("occupied"))
        {
            seat.classList.toggle("selected");
            calculatePrice();
            updateDisplayElement();
        }
    });
});


movieSelected.addEventListener("change", function(eventObj){
    calculatePrice();
    updateDisplayElement();
})

function calculatePrice()
{
    seatsSelected = document.querySelectorAll(".main-container .movie-book-container .seats-container .selected");
    seatsSelectedCount = seatsSelected.length;
    totalPrice = parseInt(movieSelected.value) * seatsSelectedCount;
    
    let seatsSelectedIndex = [...seatsSelected].map(function(seatSelected){
        return [...seats].indexOf(seatSelected);
    });
    
    localStorage.setItem("seatsStored", JSON.stringify(seatsSelectedIndex));
}

function updateDisplayElement(){
    displayElement.innerHTML = `You have selected <span> ${seatsSelectedCount} </span> seats. Total Price <span> Rs. ${totalPrice} </span>`;
}


