//(1) Print all the integers from 1 to 255.
function printNum(num){
    for(var i = 1; i <= num; i++){
        console.log(i);
    }
}
printNum(255);

//(2) Print integers from 0 to 255, and with each integer print the sum so far.
function printSum(num){
    var sum = 0; 
    for(var i = 0; i <= num; i++){
        sum = sum + i;
        console.log(i, sum)
    }
}

printSum(255);

//(3) Find and Print Max Given an array, find and print its largest element.
function findMaxNum(arr){
   var maxNum = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return(maxNum)
}

console.log(findMaxNum([15,37,6,9,35]));


//(4) Array with Odds Create an array with all the odd integers between 1 and 255 (inclusive).
function printOddNums(num){
   var oddNums = [];
    for(var i=0; i<=num; i++){
        if(i % 2 == 1){
            oddNums.push(i);
        }
    }
    return oddNums;

}

console.log(printOddNums(255));

//(5) Greater Than Y Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanNum(arr, y){
    var numsGreaterThanY = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > y){
            numsGreaterThanY++
        }

    }
    console.log("There are ", numsGreaterThanY, "numbers greater than", y)
}

greaterThanNum([1,2,3,4,6],5);

//(6) Max, Min, Average Given an array, print the max, min and average values for that array.
//find max num in array 
//find min num in array 
// max num / arr.length 

function minMaxAvg(arr){
    var minNum = arr[0];
    var maxNum = 0;
    var sum = 0;
    

    for(var i=0; i<arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i]
        }
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
        sum += arr[i];
    }
    console.log("Min Number: ", minNum);
    console.log("Max Number: ", maxNum);
    console.log("Sum of numbers: ", sum);
    console.log("Average: ", sum / arr.length);
    
    
}
minMaxAvg([99,95,93,92,98]);

//(7) Swap String For Array Negative Values Replace any negative array values with ​'Negitive'​.

function swapNegative(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Negitive";
        }
    }
    return arr;
}
console.log(swapNegative([1,2,3,-4]));

//(8) Get and Print Average. Analyze an array’s values and print the average.

function findAvg(arr){
    sum = 0;
    avg = 0;
    for(var i=0; i<arr.length; i++){
        sum+= arr[i]
    }
    return sum/arr.length;


}
console.log(findAvg([10,10,5]));

//(9) Square the Values. Square each value in a given array, returning that same array with changed values.

function squareValues(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]*=arr[i];
    }
    return arr;
}
squareValues([3,9,10]);

//(10) Zero Out Negative, Numbers Return the given array, after setting any negative values to zero.

function zeroNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] <0){
          arr[i] = 0;
        }
    }
    return arr; 

}
console.log(zeroNegatives([1,2,-3,4]));

//(11) Shift Array Values. Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end. 

function shiftValues(arr){
    for(var i=1; i<arr.length; i++){
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    return arr
}
console.log(shiftValues([10,3,8,7,2]))







//Reverse Array 
/*  Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to the other indices so that the order of elements is reversed.  [1,2,3,4,5] --> [5,4,3,2,1] */

