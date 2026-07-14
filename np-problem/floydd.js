class Graph {
    constructor(nodes){
        this.dist = Array.from({length: nodes}).map(x => Array.from({length:nodes}).fill(Infinity));
        this.map = new Map();//char to integer
        this.index = -1;
        this.algorithmExecuted = false;
    }

    addNode(nodeChar){
        const index = ++this.index;
        this.map.set(nodeChar, index);
        this.dist[index][index] = 0;
        this.algorithmExecuted = false;
    }
    
    addEdge(srcChar, destChar, weight){
        const srcIndex = this.map.get(srcChar)
        const destIndex = this.map.get(destChar)
        this.dist[srcIndex][destIndex] = weight;
        this.algorithmExecuted = false;
    }

    findPathBetween(){
        this.algorithmExecuted = false;
        for(let k = 0;k<this.dist.length; k++){
            for(let i = 0; i<this.dist.length; i++){
                for(let j = 0; j< this.dist.length;j++){    
                    if(this.dist[i][k] !== Infinity || this.dist[k][j] !== Infinity){
                        this.dist[i][j] = Math.min(this.dist[i][j], this.dist[i][k]+this.dist[k][j]);
                    }
                    if(this.dist[i][j] == -1) throw new Error('Negative cycle exists');
                }
            }
        }

        this.algorithmExecuted = true;
    }

    minimumLength(i, j){
        return this.dist[this.map.get(i)][this.map.get(j)];
    }
}


const graph = new Graph(4);
graph.addNode('A');
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addEdge('A','B', 1)
graph.addEdge('A','C', 5)
graph.addEdge('B','C', 1)
graph.addEdge('A','D', 1)
graph.addEdge('B','D',10)
graph.addEdge('C','D',1)
graph.addEdge('D','A',2)
graph.findPathBetween();
console.log(structuredClone(graph.dist))
console.log("",graph.minimumLength('A','C'));



const ga = {
    nodes:{
        'A': ['B','C'],
        'B':['D','A'],
        'C':[
            'A'
        ],
        'D': ['A','B'],
        'E':[]
    }
}

const stack = [];
const src = 'A'
const dest = 'E'
const backtrack = {
    'A': -1,
    'B': -1,
    'C':-1,
    'D':-1,
    'E':-1
}
stack.push(src)

let indexes = {
    'A':1,
    'B':2,
    'C':3,
    'D':4,
    'E': 5
}
const visited = Array(5).fill(false);
while(stack.length != 0){
    const element = stack.pop();
    const elementIndex = indexes[element]-1;
    visited[elementIndex] = true;
    for(let e of ga.nodes[element]){
        if(!visited[elementIndex]){
            stack.push(e)
        }
    }
}

console.log(stack)
if(backtrack[dest] == -1)
    console.log('no connected components')
else 
{
console.log('connected components');
const order = [];
const current =dest
while(current != -1  )
{
    order.push(current);
    current = backtrack[current];
}

order.reverse();
console.log(order)
}




