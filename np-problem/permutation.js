Object.defineProperty(Array.prototype, 'count', {
    get: function() {
        return this.length;
    }
})
class IPermuation {
    constructor(arr){
        this.arr = arr;
        this.results = [];
    }
    permutate(){
        throw new Error('Not implemented exception');
    }
}

class PermutationWithSwap extends IPermuation{
    constructor(arr){
        super(arr);
        this.swap = function(a,b){
            [this.arr[a],this.arr[b]] = [this.arr[b],this.arr[a]];
        }
    }

    doPermutation(index, totalSize){
         if(index == totalSize) {
            this.results.push(structuredClone(this.arr))
            return;
        }
        for(let i=index; i<totalSize; i++){
            if(i != index) this.swap(index, i);
            this.doPermutation(index+1, totalSize);
            if(i != index) this.swap(i,index)
        }
    }

    permutate(){
       this.doPermutation(0, this.arr.length);
       return this.results;
    }
}


class PermutationWithBackTracking extends IPermuation{
    constructor(arr){
        super(arr);
        this.current =[];
        this.usedArr = Array.from({length: this.arr.length}).map(x => false);
    }

    backtrackingPermutation(index){
    if(index === this.arr.length){
        this.results.push(structuredClone(this.current));
        return;
    }
    for(let i=0; i<this.arr.length; i++){
        if(this.usedArr[i]) continue;
        this.usedArr[i]=true;
        this.current.push(this.arr[i]);
        this.backtrackingPermutation(index+1)
        this.current.pop();
        this.usedArr[i]=false;
    }
}

    permutate(){
       this.backtrackingPermutation(0);
       return this.results;
    }
}


class PermutationWithoutRecursion extends IPermuation{
    constructor(arr){
        super(arr);
        if(arr.length >0 && typeof arr[0] !=='number') throw new Error('only number is supported in this permutation')
    }

    permutate(){
        const n = this.arr.length;
        const array = Array.from({length: n}).fill(0);
        const arr = this.arr;
        this.results.push(structuredClone(arr));
        let i = 0;
        while (i < n) {
            if (array[i] < i) {
            // If i is even, swap the first and i-th element
            // If i is odd, swap the c[i]-th and i-th element
            const swapIndex = i % 2 === 0 ? 0 : array[i];
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
            this.results.push(structuredClone(arr));
            array[i]++;
            i = 0;
            } else {
            array[i] = 0;
            i++;
            }
        }

        return this.results;
    }
}


class PermutationWithLexoGraphic extends IPermuation{
    constructor(arr){
        super(arr);
        if(arr.length >0 && typeof arr[0] !=='number') throw new Error('only number is supported in this permutation')
    }

    permutate(){
       // Sort array first to ensure we start from the smallest permutation
        const nums =(structuredClone(this.arr)).sort((a, b) => a - b);
        const result = [];
        while (true) {
            result.push([...nums]);
            
            // 1. Find the largest index k such that nums[k] < nums[k + 1]
            let k = -1;
            for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) k = i;
            }
            
            // If no such index exists, we are at the last permutation
            if (k === -1) break;
            
            // 2. Find the largest index l greater than k such that nums[k] < nums[l]
            let l = -1;
            for (let i = k + 1; i < nums.length; i++) {
            if (nums[k] < nums[i]) l = i;
            }
            
            // 3. Swap the value of nums[k] with that of nums[l]
            [nums[k], nums[l]] = [nums[l], nums[k]];
            
            // 4. Reverse the sequence from nums[k + 1] up to the last element
            let left = k + 1;
            let right = nums.length - 1;
            while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
            }
        }
        
        return result;
    }
}



const strategies = [
    PermutationWithSwap,
    PermutationWithBackTracking,
    PermutationWithoutRecursion,
    PermutationWithLexoGraphic
]

for(let strategy of strategies){
    if(!strategy instanceof IPermuation){
        throw new Error('cannot be executed');
    }   
    let arr = [1,2,3,4];
    let start = performance.now()
    let results = (new strategy(arr)).permutate();
    let end = performance.now() 
    console.log(`${strategy.name} took ${end-start} ms to complete. and the results count is ${results.count}`, results)
}
