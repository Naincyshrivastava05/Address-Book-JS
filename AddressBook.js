class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    let zipRegex = /^\d{6}$/;
    let phoneRegex = /^[7-9]\d{9}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        throw new Error("Invalid Name! Should start with a capital and be at least 3 characters.");
    }
    if (!addressRegex.test(address) || !addressRegex.test(city) || !addressRegex.test(state)) {
        throw new Error("Invalid Address, City or State! Should have at least 4 characters.");
    }
    if (!zipRegex.test(zip)) {
        throw new Error("Invalid Zip! Should be exactly 6 digits.");
    }
    if (!phoneRegex.test(phone)) {
        throw new Error("Invalid Phone Number! Should be a 10-digit number starting with 7, 8, or 9.");
    }
    if (!emailRegex.test(email)) {
        throw new Error("Invalid Email Address!");
    }
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
  }
}

try{
let contact1 = new Contact("Naincy", "Shrivastava", "Trilanga", "Bhopal", "Madhya Pradesh", "402938", "1234753422", "naincyshri0502@example.com");
console.log("Contact Created:", contact1);
}catch (error) {
  console.log(error.message);
}
