

// function isEven(num) {
//     var num;

//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// function factorial(num) {
    
//     var result = num;

//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     while (num > 1) {
//         num--;
//         result = result * num;
//     }
//     return result;
// }

function kebabToSnake(kebab) {
    var snake = kebab.replace(/-/g, "_");
    return snake;
}

