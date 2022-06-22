let ref1 = { id: 1, name: "raj" };

// ... SPREAD OPERATOR
let ref2 = { ...ref1 };

console.log(ref1);
console.log(ref2);

// MODIFY the first object
ref1.name = "RAJJJ";

console.log(ref1);
console.log(ref2);
