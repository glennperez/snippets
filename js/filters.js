const obj = {
  inner: {
    prop: "value",
    prop2: "value2",
  },
};
const objs = {
  a: {
    prop: "value",
    prop2: "value2",
  },
  b: {
    prop: "value",
    prop2: "value2",
  },
};
const objArray = [
  {
    id: 1,
    name: "john doe",
  },
  {
    id: 2,
    name: "carl smit",
  },
  {
    id: 3,
    name: "boby jones",
  },
];
const otherArray = [
  {
    id: 3,
    name: "boby jones",
  },
  {
    id: 4,
    name: "alan burns",
  },
];

const getInnerElement = (obj) => Object.entries(obj)[0][1];

const toArray = (snapshot) => Object.entries(snapshot).map((e) => e[1]);

const toArrayWithKeys = (snapshot) =>
  Object.entries(snapshot).map((e) => ({ id: e[0], ...e[1] }));

const comparer = (array, prop) => (current) =>
  array.filter((a) => a[prop] === current[prop]).length === 0;

console.log(getInnerElement(obj));
console.log(toArray(objs));
console.log(toArrayWithKeys(objs));
console.log(objArray.filter(comparer(otherArray, "id")));
