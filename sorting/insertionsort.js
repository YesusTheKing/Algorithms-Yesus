const arr = [8,-13,5,-14,1,55]
const isMin = true;
const callback = (a,b) => isMin ? a<b:a>b;
console.log(arr);
let i =0;
let j = i+1;
while(j < arr.length){
    let currentElement  = arr[j];
    while(callback(currentElement, arr[i]) && i >=0){
        arr[i+1] = arr[i]
        i--;
    }
    //no need to check because it only exits when there is no match to move our current key element
    arr[i+1] = currentElement;
    // if(currentElement !== arr[i+1])
    // {
    //     arr[i+1] = currentElement;
    // }
    j++;
    i = j-1;
}

console.log(arr);