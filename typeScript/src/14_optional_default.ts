function greetPersonOptional(name?:string):string{

    const uperRes=name ? name?.toUpperCase() :"guest"
    return `Hello ${uperRes}`

}

console.log(greetPersonOptional("Ashutosh Moni"))
console.log(greetPersonOptional())

function connect (host:string,port?:number,secure?:boolean){
    const p=port ?? 80;
    const s=secure ?? false

    return ` Connect ${p} ${s} ${host} `
}

connect("localhost",100,true)