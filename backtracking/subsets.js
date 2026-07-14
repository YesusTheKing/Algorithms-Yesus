const subset = [1, 2, 3];

const solution = [];
const res = [];

function backtrack(row) {
  if (row == subset.length) {
    solution.push([...res]);
    return;
  }

  //not taking any values.
  backtrack(row + 1);

  res.push(subset[row]);
  backtrack(row + 1);
  res.pop();
}

backtrack(0);

console.log("subsets of given array has been found and it is ", solution);

//another way of doing it.
const newsolution = [];
const newres = [];

function easyone(start) {
  newsolution.push([...newres]);
  for (let i = start; i < subset.length; i++) {
    newres.push(subset[i]);
    easyone(i+ 1);
    newres.pop();
  }
}
easyone(0);
console.log("subsets of given array has been found and it is ", newsolution);
