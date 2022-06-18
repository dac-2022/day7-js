async function sum(p1, p2) {
  return p1 + p2;
}

async function main() {
  let output = await sum(1, 1);
  console.log(output);
}

main();
