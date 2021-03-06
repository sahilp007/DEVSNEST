let words = ["1", "2", "3", "4", "5", "6", "7", "8"];
words = [...words, ...words];
let moves = 32;
let matches = 0;
let gameActive = true;

for (let i = 1; i <= 16; i++) {
	let card = document.createElement("div");
	card.classList.add("flip-card");
	let inner = document.createElement("div");
	inner.classList.add("flip-inner");
	let front = document.createElement("div");
	front.classList.add("front");
	let back = document.createElement("img");
	let rand = Math.floor(Math.random() * (16 - i));
	var Source = words[rand] + ".png";
	back.setAttribute("src", Source);
	words.splice(rand, 1);
	back.classList.add("back");
	inner.appendChild(front);
	inner.appendChild(back);
	card.appendChild(inner);
	document.getElementById("memory-game").appendChild(card);
}

let click;
let btns = document.getElementsByClassName("flip-card");

for (let i = 0; i < 16; i++) {
	btns[i].addEventListener("click", (e) => {
		if (!gameActive) return;
		moves--;
		document.querySelector("span").innerHTML = moves;
		if (click) {
			btns[i].firstChild.classList.add("flipped");
			gameActive = false;
			setTimeout(() => {
				if (!(btns[i].firstChild.lastChild.src === click.firstChild.lastChild.src)) {
					btns[i].firstChild.classList.remove("flipped");
					click.firstChild.classList.remove("flipped");
				}
				else {
					matches++;
					let cloneBtn = btns[i].cloneNode(true);
					btns[i].parentNode.replaceChild(cloneBtn, btns[i]);
					let cloneClick = click.cloneNode(true);
					click.parentNode.replaceChild(cloneClick, click);
				}
				click = undefined;
				gameActive = true;
			}, 500);
		}
		else {
			click = btns[i];
			btns[i].firstChild.classList.add("flipped");
		}
	})
}
setInterval(() => {
	if (moves === 0) {
		document.querySelector(".popup").style.display = "flex";
		document.querySelector(".container").style.display = "none";
		let h2 = document.createElement("h2");
		document.querySelector(".popup > div > h2").innerHTML = "Better Luck Next Time🙃!!!<br>Wanna try again??";
	}
	if (matches === 8) {
		document.querySelector(".popup").style.display = "flex";
		document.querySelector(".container").style.display = "none";
		document.querySelector(".popup > div > h2").innerHTML = "Congratulations🎉!!<br>You won the Game."
	}
}, 100);

document.getElementById("reload").addEventListener("click", (e) => {
	window.location.reload();
})
