const strings = ['a','b','c','d'];
//push O(1)
strings.push('e');
console.log(strings);

//pop O(1)
strings.pop();
console.log(strings);
strings.pop();
console.log(strings);

//unshift O(n)
strings.unshift('x');
console.log(strings);

//splice O(n)
strings.splice(2, 0, 'alien');
console.log(strings);

//access O(1)
console.log(strings[0]);


//Two Types - Static and Dynamic Arrays