function sumAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5, 6));

function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];
  for (let n = start ; n <=end; n+=step)out.push(n)
    return out 
}

console.log(makeRange(2,3,4))

function draw(x:number,y:number){
    console.log(x,y);
}

const pointFixed=[10,20] as const  //read only 
draw(...pointFixed)
