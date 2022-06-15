const id = "5";

if (id) {
  console.log("Alwasys true");
}

// WITH DOUBLE EQUALS
if (id == "5") {
  console.log("I am also true!!");
}

// == THIS IGNORES THE DATA TYPE
// this is magic :: ONLY CHECK CONTENTS ARE SAME
if (id == 5) {
  console.log("I am also true!!");
}

// === MEANS STRICT DATA TYPE CHECK
// WITH TRIPLE EUQLS
if (id === "5") {
  console.log("YES");
}

if (id === 5) {
  console.log("YES");
}
