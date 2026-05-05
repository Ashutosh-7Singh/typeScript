function describeTypeOf(x: unknown) {
  if (typeof x === "string") return String;
  if (typeof x === "number") return 10;
  if (typeof x === "boolean") return true;
  if (typeof x === "bigint") return;
  if (typeof x === "string") return String;
  if (typeof x === "symbol") return Symbol;
  if (typeof x === "undefined") return undefined;
  if (typeof x === "function") return () => {};
  if (typeof x === null) return Object;
}
console.log(
  describeTypeOf("JI"),
  describeTypeOf(12),
  describeTypeOf(true),
  describeTypeOf(10n),
  describeTypeOf(Symbol("Ashutosh Singh")),
  describeTypeOf(undefined),
  describeTypeOf(() => {}),
  describeTypeOf(null),
  describeTypeOf({}),
);

function info(z: unknown) {
  if (Array.isArray(z)) {
    return z;
  }
  if (z instanceof Date) {
    return new Date();
  }
  if (z instanceof Error) {
    return new Error("MONI");
  }
  return "other";
}

console.log(
  info([1, 2, 3, 4, 5, 6]),
  info(new Date()),
  info(new Error("oops !  Error occured")),
  info({ x: 1 }),
);
