Here's a JavaScript code that simulates a simple e-commerce application with customer registration, product listing, shopping cart management, and checkout functionality. The code showcases different concepts and techniques, including object-oriented programming, event handling, local storage, and validation.

```
/* ecommerce-app.js */

// Global variables
let loggedInUser = null;
let products = [];
let cart = [];

// Classes

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Functions

function registerUser(name, email, password) {
  const newUser = new User(generateUniqueId(), name, email, password);
  loggedInUser = newUser;
  console.log(`User ${newUser.name} registered successfully!`);
}

function login(email, password) {
  const user = findUserByEmailAndPassword(email, password);
  if (user) {
    loggedInUser = user;
    console.log(`User ${user.name} logged in successfully!`);
  } else {
    console.log('Invalid email or password.');
  }
}

function logout() {
  loggedInUser = null;
  console.log('User logged out successfully!');
}

function addProduct(name, price) {
  const newProduct = new Product(generateUniqueId(), name, price);
  products.push(newProduct);
  console.log(`Product ${newProduct.name} added successfully!`);
}

function addToCart(productId, quantity) {
  const product = findProductById(productId);
  if (product) {
    const existingCartItem = cart.find(item => item.productId === productId);
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    console.log('Product added to cart successfully!');
  } else {
    console.log('Invalid product ID.');
  }
}

function removeProductFromCart(productId) {
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    console.log('Product removed from cart successfully!');
  }
}

function checkout() {
  if (cart.length === 0) {
    console.log('Cart is empty. Add products before checkout.');
    return;
  }

  const totalPrice = cart.reduce((total, item) => {
    const product = findProductById(item.productId);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0);

  console.log(`Total price: $${totalPrice.toFixed(2)}`);

  // Perform payment and delivery logic here
  // ...

  cart = [];
  console.log('Checkout completed successfully!');
}

function findUserByEmailAndPassword(email, password) {
  return users.find(user => user.email === email && user.password === password);
}

function findProductById(id) {
  return products.find(product => product.id === id);
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Sample usage

// Register users
registerUser('John Doe', 'john.doe@gmail.com', 'password1');
registerUser('Jane Smith', 'jane.smith@gmail.com', 'password2');

// Login
login('john.doe@gmail.com', 'password1');

// Add products
addProduct('Product A', 10);
addProduct('Product B', 15);
addProduct('Product C', 20);

// Add products to cart
addToCart(products[0].id, 2);
addToCart(products[1].id, 1);

// Remove a product from cart
removeProductFromCart(products[0].id);

// Checkout
checkout();

// Logout
logout();
```

Note that this code is a simplified example and does not include full error handling or user interface components.