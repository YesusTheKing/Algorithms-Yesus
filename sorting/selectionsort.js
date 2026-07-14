const arr = [1,2,3,1];
const isMin = false;
// for(let i=0; i<= 10; i++){
//     arr.push((Math.random() > 0.5? -1: 1)* Math.ceil(Math.random() * 1000));
// }
const callback = (a,b) => isMin? a<b: a>b;
console.log(arr);
let i = 0;
while(i <arr.length){
    let j = i+1;
    let maxIndex = i;
    while(j <arr.length){
        if(callback(arr[j], arr[maxIndex])){
            maxIndex = j;
        }
        j++;
    }
    if(i !== maxIndex){
        [arr[i], arr[maxIndex] ]= [arr[maxIndex], arr[i]]
    }
    i++;
}

console.log(arr)