// document.write("hi world")



function  isPrime(n) {
	let isPrime = true;


	let i = 2;
		while(i< parseInt( n ** 0.5 ) + 1 ){
	if(n % i == 0){

		isPrime = false
		// console.log(i);
		break;

		}
		i++;
	}
	return isPrime;
}
let a=10007
let b=1000111
let c=10004444
console.log(isPrime(a));
console.log(isPrime(b));
console.log(isPrime(c));

// arrow function
const sayThings = () => {
	console.log("halooo");
}
sayThings();


// arrow function

const addieren=(a,b) => a+b;
console.log(addieren(2,4));


// forEach mit arrow function

let nums = [1,2,3,4,5,6,8]

	nums.forEach( n => console.log(n))

	// replace 

// nums.forEach(function (n) {
// 	console.log(n);
// 	})	

let student = {
	firstname: "sara",
	lastname: "mueller",
	age: 33,
	fields: ["progemming","nursing"],
	status: true,

	// defintion methide
	fullname(firstname, lastname){
			return  `${this.lastname}  ${this.firstname}`
		}
		,
		sayHello(){
			console.log(`hello ${this.fullname()} `)
		},
		showField(){
			this.fields.forEach((field,index) => {
				console.log(`${index +1}. ${field}`)
			});
		}

	}


console.log(student.sayHello());	 	
student.showField()



