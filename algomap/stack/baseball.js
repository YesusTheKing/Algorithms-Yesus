const scoreArray = ["5", "2", "C", "D", "+"];
const stack = []

// scoreArray.push("5")
// scoreArray.push("2")
// scoreArray.push("3")
// scoreArray.push("+")
// scoreArray.push("D")
// scoreArray.push("C")

let i = 0;
while(i < scoreArray.length){
    const ele = scoreArray[i];
    if(isNaN(ele)){
        switch(ele){
            case "+": {
                stack.push(stack[stack.length-1]+stack[stack.length-2])
                break;
            }
            case "D": {
                stack.push(stack[stack.length-1]*2)
                break;
            }
            case "C": {
                stack.pop();
                break;
            }
        }
    }else{
        stack.push(Number(ele));
    }
    i++;
}

let sum = 0;
while(stack.length >0){
    sum += stack.pop()
}

console.log("sum is", sum)