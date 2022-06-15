// STRING TO NUMBER
let str1 = "5";
parseInt(str1);

// NUMBER TO STRING
let i = 5;
let str2 = i + "";

// OBJECT TO STRING
let std1 = { id: 1 };
let std1Str = JSON.stringify(std1);
console.log(std1Str);

let std2 = { id: 1, firstName: "rohit" };
let std2Str = JSON.stringify(std2);
console.log(std2Str);

let std3 = { id: 1, firstName: "rohit", address: { city: "kochi" } };
let std3str = JSON.stringify(std3);
console.log(std3str);

// STRING => OBJECT
let refstr = '{"id":1,"firstName":"rohit","address":{"city":"kochi"}}';
let refobj = JSON.parse(refstr);
console.log(refobj);
