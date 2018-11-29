const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

const genItem = (name, price) => {
  return {
    name,
    price
  }
};

const genCart = (num) => {
  let items = [];
  for (let i = 1; i < num + 1; ++i) {
    items[i - 1] = genItem(`item ${i}`, i);
  }

  return items;
}

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const rectArea = utils.area;
  expect(rectArea(5, 6)).to.be.a('number');
  expect(rectArea(5, 6)).to.equal(30);
});

it("should return the are of a circle of radius 5", function() {
  const circleArea = utils.circleArea;
  expect(circleArea(5)).to.be.a('number');
  expect(circleArea(5)).to.equal(Math.PI * 5 * 5);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const item = genItem("item name", 10.00);
  const item2 = genItem("item name", 10.00);
  expect(item).to.be.a('object');
  expect(item).to.deep.equal(item2);
  expect(item).to.deep.equal({
    name: 'item name',
    price: 10.00
  });
});

it("Should return an array containing all items in cart", function() {
  const cart = genCart(10);
  expect(cart).to.be.a('array');
  expect(cart).to.deep.equal([{
      name: "item 1",
      price: 1
    },
    {
      name: "item 2",
      price: 2
    },
    {
      name: "item 3",
      price: 3
    },
    {
      name: "item 4",
      price: 4
    },
    {
      name: "item 5",
      price: 5
    },
    {
      name: "item 6",
      price: 6
    },
    {
      name: "item 7",
      price: 7
    },
    {
      name: "item 8",
      price: 8
    },
    {
      name: "item 9",
      price: 9
    },
    {
      name: "item 10",
      price: 10
    }
  ])
});

it("Should add a new item to the shopping cart", function() {
  let cart = genCart(10);
  expect(cart).to.be.a('array');
  expect(cart).to.deep.equal([{
      name: "item 1",
      price: 1
    },
    {
      name: "item 2",
      price: 2
    },
    {
      name: "item 3",
      price: 3
    },
    {
      name: "item 4",
      price: 4
    },
    {
      name: "item 5",
      price: 5
    },
    {
      name: "item 6",
      price: 6
    },
    {
      name: "item 7",
      price: 7
    },
    {
      name: "item 8",
      price: 8
    },
    {
      name: "item 9",
      price: 9
    },
    {
      name: "item 10",
      price: 10
    }
  ])
  cart[10] = genItem("item 11", 11);
  expect(cart).to.be.a('array');
  expect(cart).to.deep.equal([{
      name: "item 1",
      price: 1
    },
    {
      name: "item 2",
      price: 2
    },
    {
      name: "item 3",
      price: 3
    },
    {
      name: "item 4",
      price: 4
    },
    {
      name: "item 5",
      price: 5
    },
    {
      name: "item 6",
      price: 6
    },
    {
      name: "item 7",
      price: 7
    },
    {
      name: "item 8",
      price: 8
    },
    {
      name: "item 9",
      price: 9
    },
    {
      name: "item 10",
      price: 10
    },
    {
      name: "item 11",
      price: 11
    }
  ])
});

it("Should return the number of items in the cart", function() {
  const cart = genCart(3);
  expect(cart.length).to.be.a('number');
  expect(cart.length).to.equal(3);
});

it("Should remove items from cart", function() {
  let cart = genCart(4);
  expect(cart.length).to.be.a('number');
  expect(cart.length).to.equal(4);
  cart.pop();
  expect(cart.length).to.be.a('number');
  expect(cart.length).to.equal(3);
  expect(cart).to.deep.equal([{
      name: "item 1",
      price: 1
    },
    {
      name: "item 2",
      price: 2
    },
    {
      name: "item 3",
      price: 3
    }])
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should remove an item when count is 0");

it("Should return the total cost of all items in the cart");
