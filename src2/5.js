async function prepareFoodOrder(p1, p2) {
  // ....
  //
  return p1 + " FOOD IS READY";
}

// CUSTOMER 1 :: ORDER 1
prepareFoodOrder("PIZZA").then((foodReady) => console.log(foodReady));

// CUSTOMER 2 :: ORDER 2
prepareFoodOrder("BURGER").then((food) => console.log(food));

// CUSTOMER 3 :: ORDER 3
prepareFoodOrder("IDLI").then((food) => console.log(food));
