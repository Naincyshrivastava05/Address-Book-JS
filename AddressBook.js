class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
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


let contact1 = new Contact("Naincy", "Shrivastava", "Trilanga", "Bhopal", "Madhya Pradesh", "402938", "1234753422", "naincyshri0502@example.com");
console.log("Contact Created:", contact1);
