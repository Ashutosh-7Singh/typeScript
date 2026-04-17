type User = {
  id: number; //required
  name: string;
  email?: string;
  readonly createdAt: Date; //can not be reassigned
};
const user1: User = {
  id: 1,
  name: "Ashutosh Singh",
  email: "ashukmr199@gmail.com",
  createdAt :new Date()
};

type Count={[k:string]:number}
type Count1=Record<"likes" | "views" | "shares" , number>

const c1 :Count = {whatever:1}
const c2 :Count1={likes :1 , views:2, shares:3}

