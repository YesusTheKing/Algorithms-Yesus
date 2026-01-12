const arr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

//identify the number of ways to put queen in each row without getting crossed
function NQueensProblem(arr, row, column) {
  function isAttacked(row, column,N) {
    for(let i=0; i<N; i++){
        if(arr[i][column] == 1)
        {
            return true;
        }
    }

    for(let i= row, j =column; i>=0, i< N, j>=0, j<N; i--,j--){
        if(arr[i][j] == 1){
            return true;
        }
    }

    for(let i= row, j =column; i>=0, i<N, j<N; i--,j++){
        if(arr[i][j] == 1){
            return true;
        }
    }

    return false;
  }
  // arr[row][column] = 1;

  // if(!isAttacked){
  //     NQueensProblem(arr,row+1, column);
  // }
  // arr[row][column] = 0;
  for (let i = row; i < arr.length; i++) {
    for (let j = column; j < arr.length; j++) {
    
    }
  }
}

NQueensProblem(arr, 0, 0);
