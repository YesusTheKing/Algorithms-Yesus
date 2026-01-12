const arr = [1,3,-1,9,8,7,6,5]

const maxConsequtive = 5;

function calculateMaxSum(arr, max){
    if(max > arr.length){
        return -1;
    }
    else if (max == arr.length){
        return arr.reduce((a,b) => {
            return a+b;
        })
    }
    //first find the sliding window
    let globalSum = 0;
    let tempSum = 0;
    for(let i=0; i< max; i++){
        tempSum += arr[i];
    }
    globalSum = tempSum;

    //go to next window and do the operation
    for(let i=max; i< arr.length; i++){
        tempSum += arr[i];
        tempSum -= arr[i-max];

        if(tempSum > globalSum){
            globalSum = tempSum;
        }
    }

    return globalSum;
}

console.log(arr,maxConsequtive, calculateMaxSum(arr, maxConsequtive));