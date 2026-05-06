type UserN7 = {
  id: number;
  name: string;
  email?: string; // T[emial]
};

function getUserN7prop<T, k extends keyof T>(objN7: T, keyN7: k): T[k] {
  return objN7[keyN7];
}

const userN7: UserN7 = {
  id: 1,
  name: "Ashutosh Singh ",
};

const idValN7=getUserN7prop(userN7,"email")


function setUserPropN7<T, k extends keyof T>(
  objN7 
)