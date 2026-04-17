// inference example
const doubleFunc=(n:number)=>n*2

// explicit return for exported/public function

export function toTitle(s:string):string{
    return `Helllo ${s}`
}

function booleanToNumber(flag:boolean):number {
    if(flag){
        return 1;
    }else {
        return 0;
    }
}