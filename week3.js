// Problem 1.a
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
function af(first, last) {
    console.log(last - first);
}
af(ages[0], ages[ages.length - 1]);

// Problem 1.b
ages.push(42);

af(ages[0], ages[ages.length - 1]);

// Problem 1.c
for(age of ages){
    console.log(age);
}

function average(e) {
    var total = 0;
    var count = 0;
    e.forEach(function(item, index) {
        total += item;
        count++;        
    });
    return total / count;
}
console.log(average(ages));

//Problem 2.a
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for (name of names){
    console.log(name);
}
var lengths = names.map(function(a) {
    return a.length;
});
console.log(lengths);
console.log(average(lengths));

//Problem 2.b
names.forEach(function(c) {
    console.log(c);
});
console.log(names.join(" "));

//Problem 3
    // To access the last element of any array you can use array[array.length - 1];

// Problem 4
    // To access the first element of any array you can use array[0];

// Problem 5
let nameLengths = lengths;
for (name of names){
    console.log(name);
}
console.log(nameLengths);

//Problem 6
for (var i = 0; i < nameLengths.length; i++) {
    console.log(nameLengths[i]);
}
let sum = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

//Problem 7
function ge(word, n) {
    for(let i = 0; i < n; i++) {
        console.log(word);
    }
}
ge('sassy', 5);

//Problem 8
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' +lastName);
}
createFullName('Nestor', 'Reyes')

// Problem 9
let arrayNine = []]
let psum = arrayNine.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
var r = console.log(psum);
function greaterThanCien(y) {
    if (y > 100) {
        console.log('true');
    } else {
        console.log('false');
    }
}
greaterThanCien(r);

// Problem 10
let arrayTen = [];
function average(pj) {
    var total = 0;
    var count = 0;
    pj.forEach(function(item, index) {
        total += item;
        count++;        
    });
    return total / count;
}
console.log(average(arrayTen));

//Problem 11
var arrayA = []
var arrayB = []
var k = console.log(average(arrayA));
var l = console.log(average(arrayB));
function lt(p, u) {
    if(p > u) {
        console.log("true");
    } else {
        console.log("false");
    }
}
lt(k, l);

//Problem 12
var isHotOutside = 'yes';
var moneyInPocket = currentValue;
function willBuyDrink(s, w) {
    if(s > w && moneyInPocket > 10.50) {
        console.log("true");
    } else {
        console.log("false");
    }
}
willBuyDrink(isHotOutside, moneyInPocket);


//Problem 13 (left array1 and 2 empty to fill in with any arrays we'd like to merge)
var array1 = [];
var array2 = [];
var array3 = array1.concat(array2);

function mesh(n) {
    console.log(n);
}
mesh(array3);
//The purpose of this function is to print out two different arrays as a single array.