// simplest arraylist :: blank
let list = [];
let list1 = [1, 2, 3, 4];
let list2 = ["delhi", "kochi", "tvm", "mumbai"];

let str = "";
for (let item of list1) {
  str += item + " ";
}
console.log(str);

for (let item of list2) {
  console.log(item);
}
