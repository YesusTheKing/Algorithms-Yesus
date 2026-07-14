/*
Topological sort deals with sequence or parallel completion of tasks or works in a directed acyclic graph.
There might be many order of sequence for tasks available for topological sort and there is no one correct answer.
explanation:
A needs B to finish.
B needs C to finish.
D can finish without any dependencies.
E needs D to finish.
C needs E to finish.
F can finish without any dependenices.

D ----> E ------> C ------> B ------> A
F

there are two orders available.

Two approaches globally applicable.

Kahn's algorithm
Dfs using stack
*/


let graph = {
    nodes: [
        [0, 'A', [1],[]],
        [1,'B',[2],[]],
        [2, 'C',[4],[]],
        [3, 'D',[],[]],
        [4,'E',[3],[]],
        [5,'F',[],[]]
        // [0,'A',[1]],
        // [1,'B',[0]]
    ]
}

enum VisitingState {
    visiting = 0,
    visited = 1,
    nonvisited = 2
}

//depth first appraoch to find out graph's topological sort.

const visitedArr:VisitingState[] = Array.from({length: graph.nodes.length}).map(() => VisitingState.nonvisited);
const stack: number[] = [];
const order: number[] = [];
let nodes = graph.nodes;
let cyclePresent:boolean =false;
for(let i = 0; i< graph.nodes.length; i++){
    
    if(visitedArr[i] == VisitingState.visited) continue;
    
    stack.push(i);

    while(stack.length > 0){
        const current = stack[stack.length-1];
        visitedArr[current] = VisitingState.visiting;
        const deps = nodes[current][2] as number[];
        let noDeps:boolean = true;
        if(deps.length > 0){
            for(let dep of deps){
                if(visitedArr[dep] == VisitingState.visited) continue;
                else if(visitedArr[dep] === VisitingState.visiting) {
                    cyclePresent = true;
                    break;
                }
                else {
                    noDeps = false;
                    stack.push(dep);
                }
            }
        } 
        if(noDeps) {
            stack.pop();
            order.push(current);
            visitedArr[current] = VisitingState.visited;
        }
    }
}

if(cyclePresent){
    console.log("Cycle present in the DAG and can't build a topological order");
}else {
    console.log("Topological order of current tasks are", order.map(x => nodes[x][1]).join(
        "->"
    ))
}



//kahn's algorithm to check later
graph = {
    nodes: [
        [0, 'A', [1],[]],
        [1,'B',[2],[0]],
        [2, 'C',[4],[1]],
        [3, 'D',[],[4]],
        [4,'E',[3],[2]],
        [5,'F',[],[]]
        // [0,'A',[1]],
        // [1,'B',[0]]
    ]
}

nodes = graph.nodes;
const indegree: number[] = Array.from({length: nodes.length}).map(x => 0);
const queue: number[] = [];
const processingOrder: number[] = [];
for(let node of nodes){
    const eachNode = node as [number, string, number[], number[]];
    if(eachNode[2].length >0){
        indegree[eachNode[0]] += eachNode[2].length;
    }else {
        queue.push(eachNode[0]);
    }
}

while(queue.length >0){
     const element = queue.shift()!;
     processingOrder.push(element);
     const node = nodes[element] as [number,string,number[], number[]];
     if(node[3].length>0){
        node[3].forEach((x) => {
            indegree[x]--;
            if(indegree[x] === 0){
                queue.push(x);
            }
        })
     }
}

if(processingOrder.length < nodes.length){
    console.log("Cycle exists");
}
else {
    console.log(processingOrder.map(x => nodes[x][1]).join(" -> "))
}


graph = {
    nodes: [
        [0, 'A', [1],[]],
        [1,'B',[2],[0]],
        [2, 'C',[4],[1]],
        [3, 'D',[],[4]],
        [4,'E',[3],[2]],
        [5,'F',[],[]]
        // [0,'A',[1]],
        // [1,'B',[0]]
    ]
}

