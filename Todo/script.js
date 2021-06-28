function clicked() {
	const ul = document.getElementsByTagName('ul')[0]
	const inp = document.getElementsByClassName('input')[0].value
	const ele = document.createElement('li')
	const eleThis = this
	ele.innerHTML = `${inp}<button onclick="del(elThis)">Delete</button>`
	console.log(eleThis);
	ul.appendChild(ele)
}
function del(e) {
	console.log(e);
	e.remove()
}