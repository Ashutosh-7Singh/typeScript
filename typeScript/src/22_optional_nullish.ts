type InExample1 = { role: "Admin"; permissions: string[] };
type InExample2 = { role: "User"; expireAt: Date };

type userExample = InExample1 | InExample2;

function describeUserExample(u: userExample) {
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`;
  }
  return `User ${u.expireAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ["read "] }));

// avoide runtime crashes
// ?? (nullish) and || (falsy)
// obj?.a

type ProfileN3 = {
  name?: string;
  contact?: {
    email?: string;
  };
};

const p1: ProfileN3 = {
  name: "AShutosh",
};

const p2: ProfileN3 = { name: "Moni", contact: { email: "moni@toni.com" } };

const p1Email=p1.contact?.email
const p2Email=p2.contact?.email

// ?? => uses right hand default only when the left is null or undefined 
// || => uses the default when the left is any falsy value (0,"",null,undefined,NaN)

const countFromServerN3:number|null=0
const countFromServerN4:string|undefined=" "



const n3=countFromServerN3 ?? 100 
console.log(n3)

const b3=countFromServerN4 || 100
console.log(b3)