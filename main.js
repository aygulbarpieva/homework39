
// 1)

let enterStr = prompt('Введите строку');
function getStr(newStr) {
    let compactStr = enterStr.replace(/\s+/g, '');
    console.log(compactStr);
    }
getStr();


// 2)

const array = [10, 33, 56, 75, 90, 89, 40, 100];
function getLasrNumber(arr = array){
    const lastNumber = array[array.length - 1];
    console.log(lastNumber);
}
getLasrNumber(arr = array);


// 3)

let array1 = ['Ann', 'Michael', 'John', 'Alex'];
let array2 = ['Ali', 'Nick', 'Sara', 'Mary'];
function joinArrays(first = array1, second = array2) {
    let sum = first + second;
    console.log(sum);
    return sum;
}
joinArrays(first = array1, second = array2);


// 4)

function GetUpperCase(str = "привет") {
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(result);
}
GetUpperCase(str = "привет");


