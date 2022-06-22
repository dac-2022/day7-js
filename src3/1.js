const list = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

// find the user where id == 2;
let foundItem = null;
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  if (item.id == 2) {
    foundItem = item;
    break;
  }
}
console.log(foundItem);

// LAMDA :: STREAMS
const findItem = list.find((item) => item.id == 2);
console.log(findItem);
