// <T>=>constraint T so that only certain shapesre allowed
// <T extends X>
// key constraints -> <k extends key of T > -> K must be a key of T
// .length
function lenN4<T extends { length: number }>(xn4: T): number {
  return xn4.length;
}

console.log(lenN4("hello"));
console.log(lenN4([1, 2, 3, 4]));
console.log(lenN4({ length: 10, tag: "ok" }));

type UserN6 = { id: number; name: string; age?: number };

function userN6Extract<T, k extends keyof T>(
  arrN4: T[],
  keyN4: k,
): Array<T[k]> {
  return arrN4.map((item) => item[keyN4]);
}

const userN6: UserN6[] = [{
    id:1,name:"Ashutosh Singh",age:55
},
{
    id:2,name:"Moni Singh"
}

];
