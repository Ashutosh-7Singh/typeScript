// value must be every thigns from A to from B

type Inter1={id:string};
type Inter2={createdAt:Date};

type Entity=Inter1 & Inter2;//we must have both Id and createAT

const e:Entity={id:"1",createdAt:new Date()}

// home create two types

type Priced={id:number; title:string};
type Product={price:number}

type PricedProduct= Product & Priced

const p:PricedProduct={price:1,id:2,title:"M key ring"}