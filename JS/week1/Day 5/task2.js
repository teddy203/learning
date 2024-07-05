let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

console.log("First Name: " + contact.firstName);
console.log("Last Name: " + contact.lastName);
console.log("Email: " + contact.email);
console.log("Phone: " + contact.phone);
console.log("building: " + contact.address.building);
console.log("street: " + contact.address.street);
console.log("city: " + contact.address.city);
console.log("state: " + contact.address.state);
console.log("country: " + contact.address.country);

console.log(typeof(contact))