// interfaces-> object shapes that you expect to expand
// support declaration merging
// types -> more general  -> objects ,unions, intersctions, functions
// can not be reopned-> no merging

interface Box1 {
  width: number;
}
interface Box1 {
  height: number;
}

const boxDemo: Box1 = { width: 10, height: 20 };

// type Bag = {
//   size: string;
// };
// type Bag = { color: string };
// cant be redeclare alias type name  