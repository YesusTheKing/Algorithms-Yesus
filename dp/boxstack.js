// const boxes = [
//   { w: 4, d: 6, h: 7 },
//   { w: 1, d: 2, h: 3 },
//   { w: 4, d: 5, h: 6 },
//   { w: 10, d: 12, h: 32 }
// ];


const boxes = [
  { w: 2, d: 2, h: 50 },  // Very tall, but tiny base (Tower 1)
  { w: 50, d: 50, h: 10 }, // Short, but huge base (Foundation for Tower 2)
  {w: 1, d: 2, h: 5},
  {w: 3, d: 1, h: 1},
  { w: 20, d: 20, h: 20 }, // Can only sit on the 50x50 box
  { w: 10, d: 10, h: 30 }  // Can sit on the 20x20 box
];


//bottom up appraoch
boxes.sort((a,b) => (a.w* a.d)> (b.w*b.d)? 1:-1)
const heights  = Array.from({length: boxes.length}, (_, i) => boxes[i].h);

for(let i=1; i< boxes.length; i++){
    const currentBox = boxes[i];
    let stackedBox = null;
    let maxHeight =0;
    for( let j=0; j< i; j++){
        stackedBox = boxes[j];
        if((boxes[j].w < boxes[i].w && boxes[j].d <boxes[i].d )){
            maxHeight = Math.max(maxHeight, heights[j]);
        }
    }

    heights[i] += maxHeight;
}

console.log("Heights of the items that can stacked is", Math.max(...heights));

//recursive top down approach