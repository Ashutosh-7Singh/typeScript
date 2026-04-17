// strictNullChecks

// let title : string = "intro";

// title = undefined

let subtitle:string| undefined = "Ashutosh Singh";

// Void : function dosen't return  a  useful value 

function log(msg:string){
    console.log(msg);
}

// nerver return

function fail(msg: string):never {
    throw new Error(msg);
}

// Do not use any try to ignore as many as possible

const valueAny : any = JSON.parse('{"x":"1"} ');
