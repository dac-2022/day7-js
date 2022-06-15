let stdRef = {
  id: 1,
  firstName: "rohit",
  "user-name": "rohit@#@123sdfadfa adfadf dasf asdfa",
  address: { city: "kochi", state: "Kerala" },
};

// Access the member
console.log(stdRef.firstName);
console.log(stdRef["user-name"]);

// Add new member
stdRef.password = "@#@##";
// stdRef["pass-word"] = "121212@#@##";

// Delete Member
delete stdRef.id;

// Modify the member
stdRef.firstName = "Rohit Sharma";
delete stdRef.firstName;

// Add memeber in nested object;
stdRef.address.pincode = "500990";
stdRef.address.city = "Kochin";
console.log(stdRef);

// nested object
stdRef.stream = { main: "civil", code: "civil001" };
