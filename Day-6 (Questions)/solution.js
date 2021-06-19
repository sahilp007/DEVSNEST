// Q1
// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

let i   = '[1 ,2 ,5 ,5,4]'
let i1  = [1 ,2 ,5 ,5,4]
let i4 = '[asaf,1]'

let i2 = [...i]
let i3 = Array.from(i4)

console.log( Array.isArray(i)  ,i)
console.log( Array.isArray(i1) ,i1)
console.log( Array.isArray(i2) ,i2 )
console.log( Array.isArray(i3) ,i3 )
console.log( Array.isArray(i4) ,i4 )

// Q2
// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(ar){
	let cloned = [...ar]
	console.log(cloned)
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// Q3
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));

n1=1
function first(arr,n){

	// console.log(n,n1)
	if (n<0){
		console.log([])
		return
	}
	if (!(Number.isInteger(n)||n===0))
	{
		console.log(arr.slice(0,n1))
		return
	}
	console.log(arr.slice(0,n))
}
first([1,2,3])
first([1])
first([])
first([1,2],0)
first([1,2,3,4,5,6],4)
first([1,2,3],2)


// Q4
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let s1 = ""
let myColor = ["Red", "Green", "White", "Black"]
myColor.forEach(join1)

function join1(item){
	s1+=item
}
console.log(s1)

s2 = myColor.toString()
console.log(s2)

s3 = myColor.join("+")
console.log(s3)


// Q5
// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
m=0
for (let a=0;a<arr1.length;a++) {
	tm=0
	for (let b=0;b<arr1.length;b++){
		if (arr1[a]===arr1[b]){
			tm+=1
		}
	}
	if (tm>m){
		val = arr1[a]
		m = tm
	}
}
console.log(val,`(${m} times)`)