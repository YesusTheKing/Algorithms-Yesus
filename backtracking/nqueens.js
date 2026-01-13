const arr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const deepCopy = (objec) => {
    if(typeof objec !== 'object') return null;
    const newObject = Array.isArray(objec) ? [] : {};
    const keys = Object.keys(objec);
    for(const key of keys){
        if(typeof objec[key] === 'object') {
            newObject[key] = deepCopy(objec[key]);
        } else {
            newObject[key] = objec[key];
        }
    }
    return newObject;
}

//identify the number of ways to put queen in each row without getting crossed
function NQueensProblem(arr, row) {
  if (row === arr.length) {
    console.log(deepCopy(arr));
    return;
  }

  function isAttacked(row, column) {
    //attack checked on columns on previous rows.
    for (let i = 0; i < row; i++) {
      if (arr[i][column] == 1) {
        return true;
      }
    }
    //cross attack on the left
    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (arr[i][j] == 1) {
        return true;
      }
    }

    //cross attack on the right
    for (let i = row - 1, j = column + 1; i >= 0 && j < arr.length; i--, j++) {
      if (arr[i][j] == 1) {
        return true;
      }
    }

    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[row][i] = 1;
    if (!isAttacked(row, i)) {
      NQueensProblem(arr, row + 1);
    }
    arr[row][i] = 0;
  }
}

NQueensProblem(arr, 0);
