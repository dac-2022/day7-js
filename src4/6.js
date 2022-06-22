let ref = { id: 1, name: "raj", assignment: "webapp" };
let ref1 = { ...ref }; // EXACT COYP
let ref2 = { ...ref, username: "rahul", name: "rahul" };

let list = ["delhi", "calcutta"];
let list1 = [...list];
let list2 = [...list, "kochi"];
