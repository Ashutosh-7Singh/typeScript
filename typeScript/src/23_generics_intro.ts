// understand what  is "type parameters" <T>
// how typescript infers <T> from your arguments automatically

// is function  -> the types are "blanks" -> you fill in later
// <T> is aplaceholder
// TS will try to understand what T should be

function id<T>(x: T): T {
  return x;
}

// infers T
// id(5) ->T is  number
// id("5") -> T is string
// id<number> (5)

const xyz = id(5);
console.log(xyz + 1, id(["sangam"]));

function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstGen([1,2,3,4,5]));

