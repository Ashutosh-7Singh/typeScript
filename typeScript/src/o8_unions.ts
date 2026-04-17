// value -> this or that

function printId(id:string | number){
    if(typeof id === "string"){

    }else {

    }
}

// object Union 
type Admin={role:"Admin",permission:string[]}
type Customer={role:"Customer",loyalityPoints:number}

function describeUser(u:Admin | Customer){
    if(u.role=== 'Admin'){
        console.log(u.permission)
    }else{
        console.log(u.loyalityPoints)
    }
}

function describeUserInOperator(u:Admin | Customer){
    if('permission' in u){
        console.log(u.role , 'Admin user')
    }else {
        console.log(u.loyalityPoints , 'Customer ')
    }
}

//Array of union VS Unioin of Arrays 

const arrOfUnion:(string|number) []=["a",1,"b","2"];
const unionOfArrays:string[] | number[] = Math.random()>0.1?["x","3"]:[1,2]