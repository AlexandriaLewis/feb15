

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
//     var total = 0;
//     for (var i = 0; i < args.length; i++) {
//       total += args[i];
//     }

  var total = 0;
  args.forEach(function (item){
    total += item;
  });
  return total;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var numSum = 0;
    args.forEach(function (item){
      numSum += item;
      return numSum;
    });
    return numSum / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var prev = 0;
    args.forEach(function(item){
      if (item > prev) {
        return prev = item;
      }
    });
    return prev;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var comp = "";
    args.forEach(function(item){
      if (item.length > comp.length) {
        comp = item;
      }
    });
    return comp;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

var myNames = ["Sophia", "Ezelene", "Otto", "Etta", "Brianne", "Star"];
var myNumbers = [2, 4, 6, 8, 1, 3];
var myString = "This is a string to test on.";

var myNamesSort = (function(){
  console.log(myNames);
  console.log("SORTED " + myNames.sort());
  console.log(myNumbers);
  console.log("SORTED " + myNumbers.sort());
});

// console.assert(myNames.sort());
// console.assert(myNumbers.sort());

// .sort()

var myNamesConcat = (function(){
  console.log(myNames);
  console.log(myNumbers);
  var nameNumber = myNames.concat(myNumbers);
  console.log(nameNumber);
});

// var nameNumber = myNames.concat(myNumbers);
// console.assert(nameNumber);

// .concat()

var myNamesIndex = (function(){
  console.log(myNames);
  console.log(myNames.indexOf("Otto"));
});

// console.assert(myNames.indexOf("Otto"));

// .indexOf()

var myStringSplit = (function(){
  console.log(myString);
  console.log(myString.split(" ")); //splits string value by " " into an array
});

// console.assert(myString.split(" "));

// .split()

var myNamesJoin = (function(){
  console.log(myNames);
  console.log(myNames.join(", ")); //creates a string from array with ", " inbetween each index
});

// console.assert(myNames.join(", "));

// .join()

var myNumbersPop = (function(){
  console.log(myNumbers);
  console.log(myNumbers.pop()); //removes from the end of array ???parameters???
  console.log(myNumbers);
});

// console.assert(myNumbers.pop());

// .pop()

var myNumbersPush = (function(){
  console.log(myNumbers);
  console.log(myNumbers.push(5, 7, 9)); //adds to the end of array
  console.log(myNumbers);
});

// .push()

var myNamesSlice = (function(){
  console.log(myNames);
  console.log(myNames.slice(2, 5));
  // (index spot, how far from that spot to go) takes out indexes
  // will return ["Otto", "Etta", "Brianne"] ????? why 5?????
  console.log(myNames);
});

// .slice()

var myNumbersSplice = (function(){
  console.log(myNumbers);
  console.log(myNumbers.splice(2, 0, "potato")); //insert new index
  console.log(myNumbers);
  console.log(myNumbers.splice(2, 4)); //deleting indexes and returns those indexes and values
  console.log(myNumbers);
});

// .splice()

var myNamesShift = (function(){
  console.log(myNames);
  console.log(myNames.shift()); //removes from front and returns that element ???parameters???
  console.log(myNames);
});

// .shift()

var myNumbersUnshift = (function(){
  console.log(myNumbers);
  console.log(myNumbers.unshift(10, 11, 12)); //adds to the front of array returns new length ???parameters???
  console.log(myNumbers);
});

// .unshift()

var myNumbersFilter = (function(){
  console.log(myNumbers);
  console.log(myNumbers.filter());
  console.log(myNumbers);
});

// .filter()

var myNamesMap = (function(){
  console.log(myNames);
  console.log(myNames.map());
  console.log(myNames);
});

// .map()
