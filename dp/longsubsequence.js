const arr =[1, 0, 2, 5, 4, 3, 4, 5, 6,7,8,1,2,3,4,5,6,7,8,9,10];

//find a longest subsequence.
//bottomo up tabulation
const weight = Array.from({length: arr.length}, (_,i) => 1 );

for(let i=1; i< arr.length; i++){
    let maxWeight = 0;
    for(let j=0; j< i ; j++){
            if(arr[j] < arr[i]){
                maxWeight = Math.max(weight[i], weight[j])
            }
    }
    weight[i] += maxWeight;
}

console.log(weight.reduce((a,b)=> a>b?a:b,0));

//top down appraoch with memoization and recursion

const anotherArr = [0,2,1,2,5,6,0,1,2,3]
const cache = new Map([
    [0, 1]
]);

function recursiveFind(n){
    if(cache.has(n)) return cache.get(n);

    let maxAt = 1;
    for(let j = 0; j<n;j++){
        let prevValue = recursiveFind(j);
        if(anotherArr[j] < anotherArr[n] ){
            maxAt = Math.max(prevValue+1, maxAt)
        }
    }
    cache.set(n, maxAt);
    return maxAt;
}

console.log(anotherArr.reduce((a,b) => {
    const result = recursiveFind(a);
    const result1 = recursiveFind(b);
    return result> result1 ? result: result1;
}, Number.MIN_VALUE));