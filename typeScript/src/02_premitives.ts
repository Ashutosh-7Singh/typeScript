let username:string = "Ashutosh Singh";
let age:number=29;
let isCreator : boolean = true;
const big : bigint = 2n**6n - 1n;

// operator "+" cannot be applied to types  'bigint' and 'number'.
// const mixed  =  big + age 

const TOKEN : unique symbol= Symbol('TOKEN');

function yearsToDay(years:number):number{
    return years*234
}