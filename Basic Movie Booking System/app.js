const movieSelected = document.querySelector("#movies");
const seats = document.querySelectorAll(".seat");
const displayElement = document.querySelector(".main-container > .displayPrice > h3");


if(localStorage.getItem("seatsStored") || (localStorage.getItem("movieIndexStored") && localStorage.getItem("moviePriceStored")))
{
    movieSelected.selectedIndex = localStorage.getItem("movieIndexStored");

    const seatsStored = localStorage.getItem("seatsStored").replaceAll("[", "").replaceAll("]", "").split(",");

    seatsStored.forEach(function(seatStored){
        seats[parseInt(seatStored)].classList.toggle("selected");
    });

    const moviePriceStored = parseInt(localStorage.getItem("moviePriceStored"));
    updateDisplayElement(seatsStored.length, seatsStored.length * moviePriceStored);
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
            updateDisplayElement(seatsSelectedCount, totalPrice);
        }
    });
});


movieSelected.addEventListener("change", function(eventObj){
    localStorage.setItem("movieIndexStored", eventObj.target.selectedIndex);
    localStorage.setItem("moviePriceStored", movieSelected.value);
    calculatePrice();
    updateDisplayElement(seatsSelectedCount, totalPrice);
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

function updateDisplayElement(seatsSelectedCount, totalPrice){
    displayElement.innerHTML = `You have selected <span> ${seatsSelectedCount} </span> seats. Total Price <span> Rs. ${totalPrice} </span>`;
}


