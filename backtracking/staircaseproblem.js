//consider we need to reach the steps N with the combination of {1,2}
//solution: {1,1,1,1,1}, {1,1,1,2},{1,1,2,1}, {1,1,3},{1,2,1,1},{1,2,2},{1,3,1},{2,1,1,1}, {2,1,2}, {2,2,1}, {2,3}, {3,1,1}, {3,2}
//solution I made: 1 1 1 1 1,1 1 1 2,1 1 2 1,1 1 3,1 2 1 1,1 2 2,1 3 1,2 1 1 1,2 1 2,2 2 1,2 3,3 1 1,3 2
const N = 5;
const allowedSteps = [2, 1, 3];
const results = [];
var globalResults = [];
var globalResultss = [];

function recursiveBackTrackingComputerGenerated(arr, currentSum) {
    // 1. Base Case: If we hit the target, save and return
    if (currentSum === N) {
        globalResultss.push([...arr]);
        return;
    }

    // 2. Base Case: If we went over, stop this branch
    if (currentSum > N) {
        return;
    }

    // 3. Recursive Step: Try every allowed step
    for (let step of allowedSteps) {
        arr.push(step); // Choose
        recursiveBackTracking(arr, currentSum + step); // Explore
        arr.pop(); // Backtrack (Undo)
    }
}
let start = performance.now();
recursiveBackTrackingComputerGenerated([], 0);
let end = performance.now();

console.log(globalResults.map((x) => x.join(" ")).join(" | "));
console.log("Total combinations:", globalResults.length);
console.log("total elasped time in ms", (end-start)/1000)

function recursiveBackTracking(arr, sum) {
  for (let step of allowedSteps) {
    arr.push(step);
    sum = sum+step;
    if (sum < N) {
      recursiveBackTracking(arr, sum);
      arr.pop()
      sum -= step;
    } else {
      if (sum == N) {
        const newArry = [...arr];
        globalResults.push(newArry);
      }
      arr.pop();
      sum -= step;
    }
  }
}
start = performance.now();
recursiveBackTracking([], 0);
end = performance.now();
console.log(globalResults.map((x) => x.join(" ")).join());
console.log(globalResults.length)
console.log("total elasped time in ms", (end-start)/1000)
