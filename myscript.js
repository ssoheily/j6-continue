// let articles =[
// 		{
// 			title:"my first articel. "
// 			, descriptin:"Bacon ipsum dolor amet sausage pork loin swine, ribeye chislic ball tip shankle porchetta pig t-bone pork chop tenderloin venison biltong alcatra. Chislic rump frankfurter tail, venison landjaeger sirloin bacon bresaola chicken ground round shank. Alcatra biltong jerky flank tail tongue shank capicola. Leberkas landjaeger swine meatloaf. Beef ribs burgdoggen pastrami, turkey pig prosciutto salami. Short loin ham pancetta ball tip kevin ham hock jowl ribeye. Short loin salami short ribs shoulder strip steak, porchetta chicken tongue shankle t-bone beef alcatra pork belly kevin.",
// 				views:30,
// 		}
// 		,

// 		{
// 			title:"my seconde articel"
// 			, descriptin: "Swine jerky doner shoulder capicola porchetta. Meatloaf frankfurter flank, filet mignon prosciutto porchetta sausage burgdoggen hamburger rump. Landjaeger picanha biltong, beef ribs salami pork shankle pork loin pork chop pastrami meatloaf turkey tri-tip porchetta corned beef. Cupim andouille filet mignon kielbasa venison jowl meatloaf. Pork frankfurter tail sausage boudin ribeye porchetta turducken cupim. Ball tip kielbasa porchetta chicken venison tri-tip pork chop tenderloin capicola pancetta. Ribeye sirloin t-bone swine pastrami meatloaf pig filet mignon.",
// 			views:30,

// 		}
// 		,

// 		{
// 			title:"my third articel"
// 			, descriptin:"Pork loin brisket fatback corned beef beef chuck. Andouille tenderloin short loin frankfurter, strip steak chislic flank buffalo. Strip steak turkey tail pork buffalo venison pork chop doner spare ribs pancetta t-bone boudin. Rump bacon short ribs, tongue swine pig brisket shoulder tri-tip short loin ham drumstick chislic shank salami. Flank jowl pig pork drumstick strip steak.",
// 			views:30,

// 		}

// ]

// articles.forEach(article => {
// 	console.log(article.title);
// 	console.log(article.descriptin);
// 	console.log("views : "+ article.views);
// 	console.log("------------------------------");

// })

// console.log(Number)
// console.log(Math.random())
// // random between from 0 to 1
// console.log(Math.round(Math.random() * 100))
// console.log(Date.now())


// objecti store on heap and variable in stack

let num1=20;
let num2 = num1; //num1 , num2     in stack


// in heap
let student1={
	name:"mehran",
	age:33
}

let student2=student1;//refenrece equall place in heap

student2.age=31;
console.log(student1);


// for copy object in another place in heap: ...
// ...convert to string and convert to object
student2 = JSON.parse(JSON.stringify(student1))

student2.age=44;
student1.age=35;
console.log(student1);
console.log(student2);

