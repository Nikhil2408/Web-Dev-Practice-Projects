function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

let points = 0;
const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
const pointDisplay = document.querySelector("input[type='text']");
document.body.addEventListener("keydown", function (eventObj)
{
	if(eventObj.key === "ArrowDown")
	{
		player.style.top = parseInt(getComputedStyle(player).top) + 50 + "px";
		if(isTouching(coin, player))
			changeCoinPosition();
	}
	if(eventObj.key === 'ArrowRight')
	{
		player.style.left = parseInt(getComputedStyle(player).left) + 50 + "px";
		if(isTouching(coin, player))
			changeCoinPosition();
	}
	if(eventObj.key === 'ArrowLeft')
	{
		player.style.left = parseInt(getComputedStyle(player).left) - 50 + "px";
		if(isTouching(coin, player))
			changeCoinPosition();
 	}
	 if(eventObj.key === 'ArrowUp')
	 {
		player.style.top = parseInt(getComputedStyle(player).top) - 50 + "px";
		if(isTouching(coin, player))
			changeCoinPosition();
	 }
});


function changeCoinPosition()
{
	coin.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
	coin.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
	points++;
	pointDisplay.value = points;
}