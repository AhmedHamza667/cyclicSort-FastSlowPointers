//Set A

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length - 1; i++) {   //sort the array
    for (let j = 0; j < length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swap the elements
        const temp = nums[j]; 
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
  }
}
  for (let i = 0; i <= length; i++){  //traverse the array to find missing elements
    if (nums[i] != i){
      return i;
    }
  }
};


var findDuplicates = function(nums) {
    const newArr = [];   //create new array to store non-duplicates
    const duplicates = [];  //create new array to store duplicates
    for (let i = 0; i < nums.length; i++){
        let temp = nums[i];
        if (!newArr[temp]){  // if temp has not appeared in the array yet, add it to non-duplicates
            newArr[temp] = temp;
        } else{
            duplicates.push(temp); // if it's already in the array add it to duplicates
        }
    }
    return duplicates;
};


var findDisappearedNumbers = function(nums) {
    const newArr = new Set(nums);   //create new set to store nums
    const disappeared = [];  //create new array to store disappeared
    for (let i = 1; i <= nums.length; i++){
        if (!newArr.has(i)){  // if i is not in the set push it to disappeared
            disappeared.push(i);
        }
    }
    return disappeared;
};


//Set B


var removeDuplicates = function(nums) {
    let count = 0;    // keep track of the distinct count
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== nums[i+1]){  // if num[i] is distinct increment count
            nums[count] = (nums[i]);
            count++;
        }
    }
    return count;
};


var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end){  // loop through the numbers
       let sum = numbers[start] + numbers[end]; // calculate sum
       if (sum === target){ // base case if we found the 2 numbers
           return [start+1, end+1];
       } else if(sum > target){ // if it's greater then decrement the end
           end--;
       } else{ // if smaller increment the start
           start++;
       }
    }
};


var findDuplicate = function(nums) {
    let newArr = new Set(); // create a new array set
    for (let i = 0; i < nums.length; i++){
        if (newArr.has(nums[i])){  // if the new array has the element then it's duplicated
            return nums[i];
        }
        newArr.add(nums[i]); // if not then add it to the array
    }
};