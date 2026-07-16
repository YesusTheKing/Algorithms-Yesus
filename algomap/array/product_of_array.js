//Problem statement

/*
The "Product of Array Except Self" problem asks us to build a new array such that each element at index i is the product of all the elements in the original array nums, except nums[i] itself. Importantly, we are not allowed to use division in this problem, and we must solve it with a time complexity of O(n).

For example, given the input [1, 2, 3, 4], the output should be [24, 12, 8, 6].
[1,2] = prefix product * suffix product
*/

const arr = [1,2,3,4,5,6];

const result = [24,12,8,6]

const resultArr  = Array.from({length: arr.length}).fill(0);

(function (){
    for(let i=0; i< arr.length;i++){
        let product = 1;
        for(let j = 0; j< arr.length; j++){
            if(i!= j){
                product *= arr[j];
            }
        }
        resultArr[i]=product;
    }
})();


console.log(resultArr)//o(n2)

resultArr.fill(0);

(function (){
    let product = 1;
    for(let i=0; i< arr.length;i++){
        if(i==0){
         let j = 1;
         while(j < arr.length){
            product *= arr[j];
            j++;
         }  
       }
       else {
            product = resultArr[0]/arr[i];
       }
        resultArr[i]=product;
    }
})();

console.log(resultArr)//o(n)


//o(n) result //[1,2,3,4]
let finalResultArray  = Array.from({length: arr.length})

//prefix product calculation
let left = 1;
for(let i =0; i < arr.length;i++){
    finalResultArray[i] = left * (i ===0 ? 1: arr[i-1])
    left = finalResultArray[i]    
}
let right = 1
for(let j = arr.length-1; j>=0; j--){
    finalResultArray[j] = right * finalResultArray[j];
    right = arr[j]*right;
}

console.log(finalResultArray)


//segregating the prefix product and suffix product and preparing the final result
let prefixarray = Array.from({length: arr.length}).fill(1)
for(let i=0; i< arr.length;i++){
    prefixarray[i] = (i===0? 1: arr[i-1]* prefixarray[i-1]);
}
console.log('prefix array', prefixarray)

//suffix product calculation //[1,2,3,4]
let suffixarray = Array.from({length: arr.length})
let r = 1
for(let j = arr.length-1; j>=0;j--){
  suffixarray[j] = r * (j === arr.length-1? 1: arr[j+1])
  r = suffixarray[j]
}

console.log('suffix array', suffixarray)

for(let i =0; i<arr.length; i++){
    for(let j = 0; j< arr.length; j++){
        finalResultArray[i] = prefixarray[i]* suffixarray[i];
    }
}

console.log(finalResultArray)





const yesusarr = [1,2,3,4,5,6]

let yesusProductArr = Array.from({length: yesusarr.length})

for(let i =0;i< yesusarr.length; i++){
    yesusProductArr[i] = i <= 0 ? 1 : (yesusProductArr[i-1] * yesusarr[i-1]);
}

let arrayLength = yesusarr.length-1;
let yr =1
for(j = arrayLength; j>=0 ; j--){
    yesusProductArr[j] = yr * yesusProductArr[j];
    yr = yr * yesusarr[j];
}

console.log(yesusProductArr)
