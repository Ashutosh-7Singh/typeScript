//partial<T> ->make all the top level fields optional
type AddressN8 = {
  line1: string;
  city: string;
};
type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8;
};

type UserPatch10 = Partial<User10>;

const patch10: UserPatch10 = { name: "Ashutosh Singh" };
const pathc11: UserPatch10 = {
  address: { line1: "line1", city: "abc" },
};

//required<T>

type UserAllRequiredN10 = Required<User>;

const UserReuiredPatch10:UserAllRequiredN10={
    id:"jj8",
    name:"Ashutosh",
    email:"ashi@dslf.com",
    address:{line:"line",city:"city"}
}

//Readonly<T>

type ReadOnlyUser10=Readonly<User10>

const readOnlyUser10:ReadOnlyUser10={
    id:"u4",
    name:"Ashutosh",
    email:"ashi@dslf.com",
    address:{line1:"line",city:"city"}
}

 // Pick<T,K> keeps only some keys 

 type PickUser10=Pick<User10 ,"id"|"name">
 const pickUser10:PickUser10={
    id:"6g",
    name:"ashut",
    
 }

 //Omit <T,K> remove some keys

type OmitUser10=Omit<User10,"email">
const omitUser10:OmitUser10={
id:"v4",
name:"asdf",
address:{
    line1:"line",city:"adf"
}
}


//Record<K,V>

type RoleK='admin'|'user' |'editor'
type RoleCheck=Record<RoleK,User10>

