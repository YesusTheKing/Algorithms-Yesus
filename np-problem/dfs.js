Array.prototype.clear = function(){
    this.length =0;
}

class Bfs {
    constructor(nodelength){
        this.arr = Array.from({length: nodelength}).map(x => []);
    }

    addEdge(src, dest){
        this.arr[src].push(dest);
    }
}

const bfs = new Bfs(5);
console.log(bfs)
bfs.addEdge(0,1);
bfs.addEdge(0,2);
bfs.addEdge(1,3);
bfs.addEdge(2,3);
bfs.addEdge(3,4);

//traversal using bfs
let stack = [];
stack.push(0);

const traversal = [];
const visitedArr = Array(bfs.arr.length).fill(false)
while(stack.length != 0){
    const parent = stack.at(stack.length-1);
    let noChildren = true;
    for(let child of bfs.arr[parent]){
        if(!visitedArr[child])
        {
            visitedArr[child]=true;
            stack.push(child);
            noChildren = false;
        }
    }
    if(noChildren){
        traversal.push(stack.pop());
    }
}


traversal.clear();

stack.clear();

stack.push(0);
visitedArr.fill(false);
while(stack.length >0){
    const element = stack.pop();
    traversal.push(element);
    visitedArr[element]=true;
    bfs.arr[element].forEach((x) => {
        if(!visitedArr[x]){
            stack.push(x);
        }
    })
}
console.log("PreOrder",structuredClone(traversal));



graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1, 5],
    5: [2, 4]
}

const nodePath = Array(6).fill(null);

visited = Array(6).fill(false)

const queue = [];

const source = 0;
const destination = 5;

queue.push(source);
visited[source]=true;
let isConnected = false;
while (queue.length >0){
    var element = queue.shift();
    if(element == destination){
        isConnected = true;
        break;
    }
    else {
        for(let node of graph[element]){
            if(!visited[node]){
                queue.push(node);
                visited[node]= true;
                nodePath[node]=element;
            }
        }
    }
}

console.log(isConnected?'both source and destionat is connected':'it is disconnected',nodePath)

if(isConnected){
    const order = [];
    let dest = destination;
    while(dest != null){
        order.push(dest);
        dest = nodePath[dest];
    }
    order.reverse()
    console.log('order is ', order)
}

queue.length = 0;
visited.fill(false);
nodePath.fill(null);

stack = queue;
stack.push(source);
visited[source] = true;
isConnected = false;
while(stack.length >0){
    const element = stack.at(stack.length-1);
    if(element == destination){
        isConnected = true;
        break;
    }
    else {
        let nochildren = true;
        console.log(element,graph[element])
        for(let node of graph[element]){
            if(!visited[node]){
                visited[node] = true;
                stack.push(node);
                nodePath[node]=element;
                nochildren = false;
            }
        }
        if(nochildren){
            stack.pop();
        }
    }
}

console.log(isConnected?'both source and destionat is connected':'it is disconnected',nodePath)
if(isConnected){
    const order = [];
    let dest = destination;
    while(dest != null){
        order.push(dest);
        dest = nodePath[dest];
    }
    order.reverse()
    console.log('order is ', order)
}



//recursion version of dfs

function dfs_path(node,graph,visited,s,or){
    s.push(node);
    for(let n of graph[node]){
        if(!visited[n]){
            visited[n]=true;
            or.push(n)
            dfs_path(n, graph,visited,s,or)
        }
    }
    s.pop()
}

s = [];
visited.fill(false)
visited[0]=true;
let or = [0]
dfs_path(0,graph, visited,s,or)
console.log(or)


let newStack = [];
let newOrder =Array(6).fill(null);
visited.fill(false);
newStack.push(source)
while(newStack.length >0){
    let e = newStack.pop();
    if(e == destination){
        break;
    }
    else {
        if(!visited[e]){
            visited[e] = true;
            for(let node of graph[e]){
                if(!visited[node]){
                    newStack.push(node);
                    newOrder[node] = e;
                }
            }
        }
    }
}
let current = destination;
let traversalOrder = [];
while(current != null){
    traversalOrder.push(current);
    current = newOrder[current];
}
traversalOrder.reverse();
console.log(traversalOrder.join("->"))