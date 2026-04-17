// object shapes -> similiar to interfeaces
//union types(A |B)
//intersection types(A & B)

type Person1 = {
  id: number;
  name: string;
  address: string;
  salary: number;
};
const person1: Person1 = {
  id: 1,
  name: "Ashutosh Singh",
  address: "btm 2nd stage",
  salary: 1231243,
};

type status = 'new' | 'paid' | 'pending'

function nextActionCheck(s:status):string{
    switch(s){
        case 'new':
            return 'paid'
        case 'paid':
            return 'pendig'
        case 'pending':
            return 'new'
        default :
            return ' '
    }
}

type ToMerge1= {price:number}
type ToMerge2= {stock:number}

type MergedProductInfor = Person1 & ToMerge1 & ToMerge2