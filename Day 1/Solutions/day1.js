// Challange 1 - Print a left tree

var str = "";

for ( var i = 1 ; i <= 10 ; i++ ) {
    str += "*";
    console.log(str);
}

// Challange 2 - Print a right tree

var stars = "";

for (var j = 0, k = 10 ; j <= 10, k >= 0 ; j++, k--) {
    empty = Array( k + 1 ).join(' ');
    console.log(empty + stars);
    stars += "*";
}

// Challenge 3 

var stars = "*";

for (k = 10 ; k >= 0 ; k--) {

    var empty = Array( k + 1 ).join(' ');
    console.log(empty + stars);
    stars += "**";
    
}

console.log("         ***");
console.log("         ***");

// ____________________________________________________ My Answers ____________________________________________________//
// Challange 1 - Print a left tree ( khaledkzy)
var str = "*";
for (var i = 1; i <= 10; i++) { console.log(str.repeat(i)) }

// Challange 2 - Print a right tree ( khaledkzy )

var star = "*"
var empty = " "
for (var i = 10, j = 1; i > 0, j < 10; i-- , j++) { console.log(empty.repeat(i) + star.repeat(j)); }

// Challenge 3 ( khaledkzy )
var star = "*"
var empty = " "
for (var i = 10, j = 1; i > 0, j < 10; i-- , j++) {
    j === 1 ? console.log(empty.repeat(i) + star.repeat(j)) : console.log(empty.repeat(i) + star.repeat(j) + star.repeat(j));
}
console.log("         ***\n         ***");
