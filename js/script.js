"use strict"
//                                       Оператори JavaScript
// Варіант №1
console.log('35' + -"22")
// не вірно

// Варіант №2
console.log('35' * "22")
// вірно

// Варіант №3

// console.log('558' > 22++); -----Не вірно------

// Варіант №4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
// --- Не вірно поверне "0"

// Варіант №5
console.log(!false && 11 || 18 && !'');
//  --- Не вірно поверне "11"

// Варіант №6
let name = 0;
console.log(name ?? "Без ім'я");
console.log(typeof name);


//                                           IF ELSE в JAVASCRIPT.
// Варіант №1
if (1 === "1") {
	console.log('Істина');
} else {
	console.log('Брехня');
}

// Варіант №2
if (5 == "5") {
	console.log('Істина');
} else {
	console.log('Брехня');
}


// Варіант №3
let message = (92 > '11' && 55 ? 'Істина' : 'Брехня');
console.log(message);

// Варіант №4
if (0) {
	console.log('Брехня');
} else if (" ") {
	console.log('Істина');
}

//                                                 Циклы FOR и WHILE в JavaScript.  

// Задача №1
// while
let num = 1;
while (num < 6) {
	console.log(num);
	num++;
}
// for
for (let num = 1; num < 6; num++) { console.log(num); }


// Задача №2
let numOne = 8;
while (numOne) {
	console.log(numOne);
	numOne--;
}

// Задача №3
let numTwo = 0;
while (numTwo < 3) {
	console.log(`Число:${numTwo}`);
	numTwo++;
}

// Задача №4
// Цикл №1
// for (let numThree = 0; numThree < 2; numThree++) {
// 	for (let size = 0; size < 3; size++) {
// 		console.log(size);
// 	}
// }

firstfor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 2; size++) {
		if (size == 1) { break firstfor; }
		console.log(size);
	}
}

//  -------------------------------------------Числа в JAVASCRIPT.

// Задача №1
let sourceNum = 1.005 + Number.EPSILON;
let numFirst = Math.round(sourceNum * 100) / 100;
console.log(numFirst);

// Задача №2
let value = + "135.58px";
value = parseFloat("135.58px");
console.log(typeof value);
console.log(value);

// Задача №3
let valueOne = 58 + "Фрилансер";
if (valueOne == NaN);
console.log(Number(valueOne));
console.log(isNaN(valueOne));

// Задача №4
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5
console.log(Math.floor(58.858));

// ----------------------------------------------Рядки в JAVASCRIPT.

// Задача №1
let fls = "фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);

// Задача №2
let textOne = "фрілансер"; console.log(textOne[5]);

// Задача №3
let valueTwo = 58 + "Фрилансер";
let textTwo = 123 + "456";
console.log(textTwo);
// Не вірно

// Задача №4
let textThree = 'фрілансер';
console.log(textThree.toLocaleUpperCase());

// Задача №5
let textFour = 'фрілансер';
console.log(textFour.slice(3, 6));

// Задача №6
let textFшму = 'фрілансер';
console.log(textFour.includes('лан', 4));
// false