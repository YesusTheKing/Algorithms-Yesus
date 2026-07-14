const arr = [-14,8,5,5,-15,1,55,-1,-2,-3,100]
const isMin = false;
var callback = (a,b) => isMin? a<=b: a>=b;
//first divide and conquer

function divideAndConquer(array = []){
    if(array.length <=1) return array;
    const firstHalf = Math.floor(array.length /2);
    const left = divideAndConquer(array.slice(0, firstHalf))
    const right = divideAndConquer(array.slice(firstHalf, array.length))
    return merge(left, right)
}

function divideConquer(array = [], start = 0, end = 0){
    if(start >= end) return;
    const mid = start+ Math.floor((end-start)/2)
    divideConquer(array, start, mid)
    divideConquer(array, mid+1, end)
    mergeWithoutArray(array, start, mid , end)
}

function mergeWithoutArray(array = [], start, mid, end){
    let i = start;
    let j = mid+1;
    while(i <= mid && j <= end){
        if(callback(array[i], array[j])){
            i++;
        }else{
            let current = array[j];
            let index = j;

            while(index > i){
                array[index] = array[index-1];
                index--;
            }
            array[i] = current;

            i++;
            mid++;
            j++;
        }
    }
}

function merge(leftArray=[] ,rightArray = []){
    let i = 0;
    let j = 0;
    let k = 0;
    let finalArray = Array.from({length: leftArray.length+rightArray.length}).fill(0)
    while(i < leftArray.length || j < rightArray.length){
        if(i < leftArray.length && j < rightArray.length){
            if(callback(leftArray[i], rightArray[j])){
                finalArray[k] = leftArray[i];
                i++;
            }else {
                finalArray[k] = rightArray[j];
                j++;
            }
            k++;
        }
        else if(i < leftArray.length){
            while(i < leftArray.length){
                finalArray[k++] = leftArray[i++];
            }
        }
        else{
            while(j < rightArray.length){
                finalArray[k++] = rightArray[j++];
            }
        }
    }

    return finalArray;
}

console.log(arr)

const result = divideAndConquer(arr)
divideConquer(arr, 0, arr.length-1)
console.log('result array is ', result.join(" "))
console.log("array is ",arr)