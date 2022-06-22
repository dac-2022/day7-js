let list = ["delhi", "calcutta", "mumbai", "chennai"];
let list2 = [
  "<h1>Delhi</h1>",
  "<h1>Calcutta</h1>",
  "<h1>Mumbai</h1>",
  "<h1>Chennai</h1>",
];

// Conventional Way
let outputList = [];
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  let output = `<h1>${item}</h1>`;
  outputList.push(output);
}
console.log(outputList);

// LAMDA :: STREAMS :: Extensively Used IN REACT
const list1 = list.map((item) => `<h1>${item}</h1>`);
console.log(list1);

// MAP ::  TRANSFORMATION
// INPUT => ITEM
// OUTPUT => TRANSFORMED ITEM
