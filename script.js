function calculateTotal(taxRate, discount) {
  return function (products) {
    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    const tax = subtotal * taxRate;
    const totalAfterDiscount = subtotal - subtotal * discount;
    return totalAfterDiscount + tax;
  };
}

// Create curried functions for different scenarios
const calculateTotalWithTax = calculateTotal(0.1, 0);
const calculateTotalWithDiscount = calculateTotal(0, 0.2);
const calculateTotalWithTaxAndDiscount = calculateTotal(0.1, 0.2);

// Calculate total price for different sets of products
const products1 = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
];
// console.log(calculateTotalWithTax(products1)); // Output: 33

const products2 = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
];
// console.log(calculateTotalWithDiscount(products2)); // Output: 24

const products3 = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
];
// console.log(calculateTotalWithTaxAndDiscount(products3)); // Output: 27

/*
****************************************** 
Another example to understand currying 
******************************************
*/

const isEmail = (val) => /\S+\@\S+\.\S+/.test(val);

const isRequired = (val) => {
  return val.trim() !== "";
};

const isPhone = (val) => /\d{8}/.test(val);

const createValidation = (rules) => {
  return function (value) {
    const errors = [];

    for (const rule of rules) {
      if (!rule.validator(value)) {
        errors.push(rule.message);
      }
    }
    return errors;
  };
};
const formErrors = {};
const emailValidation = createValidation([
  { validator: isRequired, message: "Email is required" },
  { validator: isEmail, message: "Email is invalid" },
]);
const phoneValidation = createValidation([
  { validator: isRequired, message: "Phone is required" },
  { validator: isPhone, message: "Phone is invalid" },
]);

formErrors["email"] = emailValidation("abss.com");
formErrors["phone"] = phoneValidation("12345678");
console.log(formErrors);
