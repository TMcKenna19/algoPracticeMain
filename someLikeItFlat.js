// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property
// Hint - Can we put a for loop inside another for loop?

var arr2d = [[2,5,8], [3,6,1], [5,7,7]];

function isValuePresent(arr2d, value){
    for(var i=0; i<arr2d.length; i++){
        for(var j=0; j<arr2d[i].length; j++){
            if(arr2d[i][j] === value){
                return true
            }
        }
    }
    return false
}

isValuePresent(arr2d, 7);

