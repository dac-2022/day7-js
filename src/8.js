let stdRef = {
  id: 1,
  firstName: "rohit",
  address: { city: "kochi", state: "Kerala" },
};

// Access the members of the object :: DOT OPERATOR
console.log(stdRef.id);
console.log(stdRef.firstName);
console.log(stdRef.address);
console.log(stdRef.address.city);

// Lets update the object
// Add New Member :: EMAIL
stdRef.email = "rohit@gmail.com";
// stdRef.password = "!@#!@!"
stdRef["password"] = "rohit124";

// WITH DOT OPERATOR :: CANT USE SPECIAL CHARACTER
// stdRef.user-name = "adfasf";
stdRef["username"] = "rohitsharma";

console.log(stdRef["username"]);
