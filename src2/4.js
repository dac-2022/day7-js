async function sum(p1, p2) {
  return p1 + p2;
}

console.log(11);

// non blocking statement
sum(1, 2).then((output) => console.log(output));

// non blocking statement
sum(1, 3).then((output) => {
  console.log(output);
});

console.log(22);
