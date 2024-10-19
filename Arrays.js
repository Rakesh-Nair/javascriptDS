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