const array = [2,3,1,2,4,3]
const max = 7

function findSmallestSubArray(arr, max){
    if(typeof arr !== 'object' || !Array.isArray(arr)) return [];
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;
    let start = 0;
    let minimumLength = Number.MAX_VALUE;
    for(let i=0;i<arr.length; i++){
        sum += arr[i];

        while(sum >= max){
            let minlen = minimumLength;
            minimumLength = Math.min(minimumLength,  i-start+1);
            if(minimumLength < minlen){
                startIndex = start;
                endIndex = i;
            }
            sum -= arr[start];
            start++;
        }
    }
    console.log(minimumLength)
    console.log(`minmum sub array starts at index ${startIndex} and ends at index ${endIndex}`)
    return arr.slice(startIndex, endIndex+1);
}

const result = findSmallestSubArray(array, max);
console.log(array, max, result);