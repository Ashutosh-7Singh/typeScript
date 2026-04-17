function func1(a:number,b:number):number{
    return a+b
}

const num12=[1,2,3,4]

const doubled = num12.map(n=>n*2);

type point={x:number,y:number}

function  distance(p:point){
    return Math.hypot(p.x,p.y)
}