const card = document.querySelectorAll('.img-item');

for(let i = 0; i<card.length;i++)
{
    card[i].addEventListener("click", function expandCard()
    {
        removeActive(i);
        card[i].classList.add("active");
    });
}

function removeActive(activeCardNumber)
{
    for(let i = 0;i<card.length; i++)
    {
        if(i!==activeCardNumber)
            card[i].classList.remove("active");
    }
}


