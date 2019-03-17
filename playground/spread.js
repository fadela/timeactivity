// function add(a, b){
//     return a+b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 2, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen','Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Fadela', 20];
var persontwo = ['Yasamin', 18];
function greet(name, age ) {
    let text= 'hi ' + name + ', you are ' + age;
    return text;
}

console.log(greet(...persontwo));
console.log(greet(...person));

var names = ['Mike', 'Ben'];
var final = ['Fadela', ...names]

final.forEach(function(name) {
    console.log("Hi "+ name);
})
