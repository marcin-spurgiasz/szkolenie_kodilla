//zad1
const hello = 'hello';
const world = 'world';

console.log(`${hello} ${world}`);

//zad2
const multiply = (a, b = 1) => a * b;
console.log(multiply(2));

//zad3
const average = (...args) => console.log(args.reduce((a, b) => a + b) / args.length);

//zad4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zad5
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);