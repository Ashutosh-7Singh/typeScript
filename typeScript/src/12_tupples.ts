// fixed length and fixed types 
// (string | number) []
// optional tuples

const userEntry:[string,number]= ["moni",22]

type optionalTupple=[status:string,message?:number]

const optional :optionalTupple=["Ashutosh Moni"]

const cornerReadOnly :readonly[number,string]=[22,"moni"]