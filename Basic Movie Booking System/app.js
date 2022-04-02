const seats = document.querySelectorAll(".seat");

let seatsSelected = 0;
let totalPrice = 0;
seats.forEach(function(seat){
    seat.addEventListener("click", function(){
        if(!seat.classList.contains("occupied"))
        {
            seat.classList.toggle("selected");
            calculatePrice();
            const displayElement = document.querySelector(".main-container > .displayPrice > h3");
            displayElement.innerText = `You have selected ${seatsSelected} seats. Total Price ${totalPrice}`;
        }
    });
});


function calculatePrice()
{
    seatsSelected = document.querySelectorAll(".main-container .movie-book-container .seats-container .selected").length;
    totalPrice = 100 * seatsSelected;
}

