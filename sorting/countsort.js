let arr = [10,9,8,5,11,-3,4,2,3,1,0]

const max = Math.max(...arr);//o(n)
const min = Math.min(...arr);//o(n)
let  isMin = false;

const countArray = Array.from({length: max+(min <0? Math.abs(min): 0)+1}).fill(0)

const result = Array.from({length: arr.length}).fill(0)
let offset = min <0? Math.abs(min):0;
do{
isMin = !isMin;
console.log(arr.join(" "))
//take the count
for(let element of arr){
    countArray[element+offset]++;
}

//prefix sum
let i = 1;
while(i < countArray.length){
    countArray[i]+= countArray[i-1];
    i++;
}

for(let element of arr){
    if(isMin) result[--countArray[element+offset]] = element;
    else{
        result[Math.abs(arr.length-countArray[element+offset])] = element;
        countArray[element+offset]--;
    }
}
console.log(result.join(" "));

arr = [...result]
result.fill(0);
countArray.fill(0);
}
while(isMin);

