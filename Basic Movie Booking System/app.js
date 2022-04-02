const movieSelected = document.querySelector("#movies");
const seats = document.querySelectorAll(".seat");
const displayElement = document.querySelector(".main-container > .displayPrice > h3");

let seatsSelected = 0;
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


movieSelected.addEventListener("change", function(){
    calculatePrice();
    updateDisplayElement();
})

function calculatePrice()
{
    seatsSelected = document.querySelectorAll(".main-container .movie-book-container .seats-container .selected").length;
    totalPrice = parseInt(movieSelected.value) * seatsSelected;
}

function updateDisplayElement(){
    displayElement.innerText = `You have selected ${seatsSelected} seats. Total Price ${totalPrice}`;
}
