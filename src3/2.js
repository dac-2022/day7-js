let list = ["delhi", "calcutta", "mumbai", "chennai"];

for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

for (let item of list) {
  console.log(item);
}

// LAMDA :: STREAMS
list.forEach((item) => console.log(item));

// FOREACH :: iterating the entire loop
// INPUT => ITEM
// OUTPUT => VOID
