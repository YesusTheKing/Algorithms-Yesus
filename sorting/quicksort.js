let arr = [-3,0,1,2,3,4,-5,-6]
console.log('before quicksort first element pivot', arr.join(","))
//left most pivot element
const stack = [[0, arr.length-1]]
while(stack.length > 0){
    const stacke = stack.pop()
    let s = stacke.at(0)
    let e = stacke.at(1)
    if(s>= e) continue;
    let pivot = arr[s];
    let i = s+1;
    let j = e;
    while(true){
        //do the swapping here.
        while(i<=j && arr[j]>= pivot)j--;
        while(i<=j && arr[i]<= pivot)i++;
        if(i <j){
            [arr[j], arr[i]] = [arr[i],arr[j]]
        }else {
            break;
        }
    }

    [arr[j], arr[s]] = [arr[s],arr[j]]
    stack.push([s, j-1]);
    stack.push([j+1, e]);
}

console.log('after quicksort first element pivot', arr.join(","),"actual sort is", [...arr].sort((a,b) => a-b).join(","))

arr = [-3,0,1,2,3,4,-5,-6]
console.log('before quicksort last element pivot', arr.join(","))
//left most pivot element
stack.push([0, arr.length-1])
while(stack.length > 0){
    const stacke = stack.pop()
    let s = stacke.at(0)
    let e = stacke.at(1)
    if(s>= e) continue;
    let pivot = arr[e];
    let i = s-1;
    let j = s;
    while(j < e){
      if(arr[j] < pivot){
        i +=1;
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
      j++;
    }
    i=i+1;
    [arr[i],arr[e]] = [arr[e],arr[i]]
    stack.push([s, i-1]);
    stack.push([i+1, e]);
}

console.log('after quicksort last element pivot', arr.join(","),"actual sort is", [...arr].sort((a,b) => a-b).join(","))


arr = [-3,0,1,2,3,4,-5,-6]
console.log('before quicksort middle element pivot', arr.join(","))
//left most pivot element
stack.push([0, arr.length-1])
while(stack.length > 0){
    const stacke = stack.pop()
    let s = stacke.at(0)
    let e = stacke.at(1)
    if(s>= e) continue;
    let pivot = s + Math.floor((e-s)/2);
    let pivote = arr[pivot]
    let i = s;
    let j = e;
    while(true){
        while(i<=j && arr[i] < pivote) i++;
        while(i<=j && arr[j] > pivote) j--;
        if(i<=j){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }else {
            break;
        }
    }
    stack.push([s, j]);
    stack.push([i, e]);
}

console.log('after quicksort middle element pivot', arr.join(","),"actual sort is", [...arr].sort((a,b) => a-b).join(","))