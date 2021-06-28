let done_divs = "0";
let remaining_divs = "35";
const done = document.querySelector(".done");
const remaining = document.querySelector(".remaining");
remaining.innerHTML = remaining_divs;
done.innerHTML = done_divs;

const a = document.querySelector('.container')
for (let i = 0; i < 35; i++) {
	const block = document.createElement('div')
	block.classList.add('box')

	// const box = document.querySelector('.box')
	block.addEventListener('click', () => {
		if (block.classList.contains('clicked')) {
			block.classList.toggle('clicked')
			done_divs = parseInt(done_divs) - 1;
			remaining_divs = parseInt(remaining_divs) + 1;
		}
		else {
			block.classList.toggle('clicked')
			done_divs = parseInt(done_divs) + 1;
			remaining_divs = parseInt(remaining_divs) - 1;
		}
		remaining.innerHTML = remaining_divs;
		done.innerHTML = done_divs;
	})
	a.appendChild(block)
}

