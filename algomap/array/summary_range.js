const arr = [0, 1, 2, 4, 5, 7];

function* enumerate(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield [i, arr[i]];
  }
}
let start = -1;
let end = -1;
let currentElement = arr[0] - 1;
let finalResult = [];
for (let [index, element] of enumerate(arr)) {
  if (Math.abs(element - currentElement) == 1) {
    if (start < 0) start++;
    end++;
  } else {
    finalResult.push([arr[start], arr[end]]);
    start = index;
    end = index;
  }
  currentElement = element;
}

console.log(
  "summary ranges are",
  finalResult
    .map((x) => {
      if (x.length > 1) {
        return `${x[0]}-> ${x[x.length - 1]}`;
      } else {
        return `[${x[0]}]`;
      }
    })
    .join("   "),
);

var summaryRanges = function (nums) {
  let ans = [];

  let i = 0;

  while (i < nums.length) {
    let start = nums[i];

    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }

    if (start !== nums[i]) {
      ans.push(start + "->" + nums[i]);
    } else {
      ans.push(start.toString());
    }

    i++;
  }

  return ans;
};

console.log(summaryRanges([1,2,3,4,5]))
