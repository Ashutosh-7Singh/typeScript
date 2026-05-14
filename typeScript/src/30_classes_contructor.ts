class  UserN15{
    id:string;
    name:string;
    email?:string;
    createdAt:Date = new Date()

    constructor (id :string,name:string,email?:string){
        //assing all the required fileds here

        this.id=id
        this.name=name;
        if(email)   this.email=email
    }
}

const result4= new UserN15("1","sangam")
const result5=new UserN15("2","moni","moni@gmail.com")

