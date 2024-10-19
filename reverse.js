
// function reverse(str){

//     if(!str || str.length <2 || typeof str !== 'string'){
//         console.log('Invalid Input');
//     }
//     var reverse = '';
//     for(let i=str.length -1 ; i>=0; i--){
//         reverse = reverse + str[i];
//     }
//     console.log(reverse);
// }

function reverse(str){
         if(!str || str.length <2 || typeof str !== 'string'){
         console.log('Invalid Input');
     }
     const backwards = [];
const totalItems = str.length -1;

for(let i=totalItems ; i>=0; i--){
    backwards.push(str[i]);
}
//console.log(backwards);
return(backwards.join(''));
}

function reverse2(str){

return str.split('').reverse().join('');
}


const reverse3 = str => str.split('').reverse().join('');
var ret = reverse2('this is my String');
console.log(ret)

var ret2 = reverse3('India is My Country');
console.log(ret2);
//reverse(32)