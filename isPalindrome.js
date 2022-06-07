function isPalindrome(arr) {
    for(var left=0; left < arr.length /2; left++) {
        var right = arr.length - 1 - left;
        if(arr[left] != arr[right]){
            return "Not a palindrome"
        }
    }
    return "Palindrome"
}

console.log(isPalindrome([1,1,3,1,1]));