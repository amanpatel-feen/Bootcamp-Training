

  console.log("Answer 4");

  // Extract all keys inside address object from user object using destructuring.
// const user = {
//   firstName: ‘Sahil’,
//   lastName: ‘Dua’,
//   Address: {
//   Line1: ‘address line 1’,
//   Line2: ‘address line 2’,
//   State: ‘Delhi’,
//   Pin: 110085,
//   Country: ‘India’,
//   City: ‘New Delhi’,
//   },
//   phoneNo: 9999999999
//   }

const user = {
    firstName: "Sahil",
    lastName: "Dua",
    Address: {
      Line1: "address line 1",
      Line2: "address line 2",
      State: "Delhi",
      Pin: 110085,
      Country: "India",
      City: "New Delhi"
    },
    phoneNo: 9999999999
  };
  
  const { Address: { Line1, Line2, State, Pin, Country, City } } = user;
  console.log( Line1, '\n', Line2, '\n', State, '\n', Pin, '\n', Country, '\n', City );

