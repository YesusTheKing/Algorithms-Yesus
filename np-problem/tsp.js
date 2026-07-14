const edges = [
    [0,10,15,20],
    [10,0,35,25],
    [15,35,0,30],
    [20,25,30,0]
]
const visitedArray = Array(edges.length).fill(false);
const visistedOrder = [];

let startingCity = 0;
visistedOrder.push(startingCity)
visitedArray[startingCity]=true;

while(startingCity>=0){
    let minEdge = Number.MAX_SAFE_INTEGER;
    let node;
    for(let i = 0; i<= edges[startingCity].length-1;i++){
        if(visitedArray[i])continue;
        if(minEdge > edges[startingCity][i]){
            node = i;
            minEdge = edges[startingCity][i];
        }
    }
    if(node == undefined){
        break;
    }else{
        startingCity = node;
        visistedOrder.push(node);
        visitedArray[node]= true;
    }
}
visistedOrder.push(visistedOrder[0]);
let sum = 0;
for(let i=0; i< visistedOrder.length-1;i++){
    sum += (edges[visistedOrder[i]][visistedOrder[i+1]]);
}

console.log(sum,visistedOrder)

const edgesSorted = [];

for(let i = 0; i< edges.length; i++){
    for(let j= 0; j<edges[i].length;j++){
        if(i == j) continue;
        edgesSorted.push({s: i, e: j, w: edges[i][j]});
    }
}

edgesSorted.sort((a,b) => a.w -b.w);
let indegreeArray = Array(edges.length).fill(0)
let navigation = Array(edges.length).fill(-1);


function isCyclePresents(){

}
for(let i=0; i< edgesSorted.length; i++){
    const es = edgesSorted[i];
    if(indegreeArray[es.e] +1 > 2) continue;
    //check if any cycle presents

}