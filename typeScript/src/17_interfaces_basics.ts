// interface ->name shape for object

interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}
const user333: User333 = {
  id: 1,
  name: "Ashutosh Singh",
  email: "ashu@gmail.com",
  createdAt: new Date( ),
};

interface Admin333 extends User333{
    permission:string[]
}

const admin333:Admin333={
  id: 2,
  name: "Ashutosh Singh",
  email: "ashu@gmail.com",
  createdAt: new Date( ),
  permission:["Admin"]
}

interface WithMeta{
    meta:{
        active:boolean
    }
}

interface AdminWithMeta extends Admin333,WithMeta {}

const adminWithMeta333: AdminWithMeta =
  {
    id:3,
    name:"Moni Singh",
    email:"moni@gmail.com",
    createdAt:new Date( ),
    permission:["Admin","User"],
    meta:{
      active:true
    }
    
}

