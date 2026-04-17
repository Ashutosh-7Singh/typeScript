const xss=[1,2,3,4,5,]
const ys: readonly number[]=[1,23,4,5,6,];
const yss:ReadonlyArray<number>=[1,2,3,4,5,];


function sum(nums:readonly number[]):number{
    let s=0;
    for(const n of nums)s+=n
    return s
}
console.log(sum(xss))