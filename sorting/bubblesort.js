const arr = [1,2,3,5,6,7,8,0]
const isMin = true;
const callback = (a,b)=> isMin?a<b:a>b;

let i = 0;
while(i < arr.length-1){
    let j = i;
    let isSwapped = false;
    while(j < arr.length-1 - i){
        if(!callback(arr[j],arr[j+1])){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            isSwapped = true;
        }
        j++;
    }
    if(!isSwapped) break;
}

console.log(arr)