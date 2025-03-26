// Regular Expressions

// Testing for matches

// // Regular expression objects have a number of methods. The simplest one is test. If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abdg"));


// // Sets of characters
// //  In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.

console.log(/[0123456789]/.test("in 1992"));

console.log(/[1-9]/.test("in 1992"));



// // To invert a set of characters—that is, to express that you want to match any character except the ones in the set—you can write a caret (^) character after the opening bracket.
let nonBinary = /[^01]/;
console.log(nonBinary.test("11000001001"));

console.log(nonBinary.test("0011122000112000"));

// // Repeating parts of a pattern

// // When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));

// // The star (*) has a similar meaning but also allows the pattern to match zero times.
console.log(/'\d*'/.test("'123'"));

// // Something with a star after it never prevents a pattern from matching—it’ll just match zero instances if it can’t find any suitable text to match.
console.log(/'\d*'/.test("''"));

// // A question mark (?) makes a part of a pattern optional, meaning it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));


// // Grouping subexpressions
// // To use an operator like * or + on more than one element at a time, you must use parentheses.
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Booooohoooo"));


// Matches and groups

// Regular expressions also have an exec (execute) method that will return null if no match was found and return an object with information about the match otherwise.

let match = /\d+/.exec("one two 100");
console.log(match);

console.log(match.index);

// // String values have a match method that behaves similarly.
console.log("one two 100".match(/\d+/));

// // When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array.

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'Hello'"));

// // When a group is matched multiple times (for example, when followed by a +), only the last match ends up in the array.
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

// // If you want to use parentheses purely for grouping, without having them show up in the array of matches, you can put ?: after the opening parenthesis.
console.log(/(?:na)+/.exec("banana"));


// The Date class

// JavaScript has a standard Date class for representing dates, or rather, points in time. If you simply create a date object using new, you get the current date and time.

console.log(new Date());

console.log(new Date(2009, 11, 10));

console.log(new Date(2009, 11, 10, 2, 30, 100));

// Timestamps are stored as the number of milliseconds since the start of 1970, in the UTC time zone.
// The getTime method on a date object returns this number.
console.log(new Date(2013, 10, 9). getTime());

console.log(new Date(1383955200000));
// Boundaries and look-ahead

// Look-ahead tests provide a pattern and will make the match fail if the input doesn’t match that pattern, but don’t actually move the match position forward. They are written between (?= and ).

console.log(/a(?=e)/.exec("braeburn"));

console.log(/a(?! )/.exec("a, b"));


// Choice patterns

// We could write three regular expressions and test them in turn, but there is a nicer way. The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. 

let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pugs"));

// The replace method

// String values have a replace method that can be used to replace part of the string with another string.
console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));

// When a g option (for global) is added after the regular expression, all matches in the string will be replaced, not just the first.
console.log("Borobudur".replace(/[ou]/g, "a"));