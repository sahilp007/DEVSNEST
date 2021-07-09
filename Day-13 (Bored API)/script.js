const box = document.querySelector('.container')

const yes = document.createElement('button')
yes.classList.add('created')
yes.classList.add('btn')
link = ''
activity = ''
let input = ''
yes.addEventListener('click', () => {
///Send Api request
	eventHandler()
// 	receive request
})
let serverURL = 'http://www.boredapi.com/api/activity'

yes.innerText = `Click this to know`

function getResult(input) {
	return serverURL + input
}

function eventHandler() {
	fetch(getResult(input))
		.then(response => response.json())
		.then(json => {
			let ac = json.activity
			let li = json.link
			this.activity = ac
			this.link = li
			const a = document.getElementById('before')
			a.innerHTML = `<span>I think you should try this</span>`
			const b = document.getElementById('y')
			b.innerHTML = `${activity}`
			if (link === '') {
				yes.innerHTML = `<br> No link found for this activity`
			}
			else {
				yes.innerHTML = `Go here to check out more<br> ${link}`
			}
		})
}
box.appendChild(yes)
