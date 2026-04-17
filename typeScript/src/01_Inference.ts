// goal ->understarn when to let TypeScript infer types
// ts ->js very well 
// when ts will writes the types u r going to write  

let count = 0; // it sees this is number 
const site = "Ashutosh Singh" ; // ts sees the exact literls 
const scors = [10,20,30,40]

//  over annotation is isnst bad  ->just noisy 

export function add(a:number,b:number):number{
    return a+b
}

//  you should also annotate when the type is not obivious  

let maybe :string | number ;

maybe = Math.random()>0.5?"test" :10