export enum HeapType{
    Max,
    Min
}

export interface PriorityItem<T> {
    data:T;
    priority: number;
}
export class PriorityQueue<T>{
    private readonly priorityType: HeapType = HeapType.Max;
    private readonly _queue: PriorityItem<T>[] = [];
    constructor(type: HeapType);
    constructor(type: HeapType, ...args:T[]){
        this.priorityType = type;
        if(args !== null){
            const iterable = args.map((x:T, index: number )=> ({data: x, priority: index}))
            this._queue.push(...iterable);
        }
    }

    enqueue(item:T,priority: number){
        const index = this._queue.length;
        this._queue.push({data: item, priority});
        //heapify from bottom to up
        this.heapify_up(index);
    }
    //This removes and gives you the top element of the priority queue
    dequeue(){

    }
    //It gives the top element of the priority queue
    peek(): T|undefined{
        const elementTobePeeked = this._queue[0] as undefined | T;
        return elementTobePeeked;
    }

    private heapify_up(index: number){
        if(index == 0) return;
        const parentIndex = ((index-1)/2) || (Math.ceil(index/2)-1);
        const leftIndex = (2*parentIndex)+1;
        const rightIndex = (2*parentIndex)+2;
    }

    private heapify_down(){

    }
}