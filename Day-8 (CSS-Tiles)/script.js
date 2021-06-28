// function setColor(e) {
// 	var target = e.target,
// 		status = e.target.classList.contains('active');
//
// 	e.target.classList.add(status ? 'inactive' : 'active');
// 	e.target.classList.remove(status ? 'active' : 'inactive');
// }

const container = document.querySelector('.container')
for (let i = 0; i < 1600; i++) {
	const blocks = document.createElement('div');
	blocks.classList.add('block');
	blocks.classList.add('inactive');
	blocks.id = i;

	blocks.addEventListener('click', () => {
		blocks.classList.toggle('inactive')
		blocks.classList.toggle('active')
	})
	container.appendChild(blocks)
}

let x = [562, 566, 570, 571, 575, 578, 580, 583, 584, 585, 586,
	579, 587, 589, 590, 591, 592, 593, 596, 597, 598, 602, 606, 610, 612,
	615, 617, 621, 623, 627, 629, 633, 635, 639, 640, 641, 642, 643, 644,
	645, 646, 647, 648, 650, 652, 655, 657, 661, 663, 667, 669, 673, 675,
	679, 682, 686, 690, 693, 695, 697, 701, 703, 704, 705, 706, 707, 709,
	710, 711, 712, 713, 715, 719, 722, 726, 730, 733, 735, 737, 741, 743,
	749, 750, 755, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 770,
	773, 775, 777, 783, 789, 781, 795, 799, 802, 806, 810, 814, 815, 791,
	817, 821, 823, 829, 832, 835, 839, 842, 846, 850, 855, 858, 859, 860,
	863, 869, 873, 876, 877, 878]

x.forEach(i=>{
	document.getElementById(i).classList.toggle('inactive')
	document.getElementById(i).classList.toggle('active')
})

// const container = document.querySelector('.container')
// for(let i=0;i<length;i++){
// 	const blocks = document.querySelector('div')
// 	blocks.classList.toggle('inactive')
// 	blocks.classList.toggle('active')
// }