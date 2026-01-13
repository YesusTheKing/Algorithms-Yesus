const subset = [1, 2, 3];

const solution = [];
const res = [];

function backtrack(row) {
  if (row == subset.length) {
    solution.push([...res]);
    return;
  }

  //not taking any values.
  backtrack(row+1);

  res.push(subset[row]);
  backtrack(row + 1);
  res.pop();
}

backtrack(0);

console.log("subsets of given array has been found and it is ", solution);
