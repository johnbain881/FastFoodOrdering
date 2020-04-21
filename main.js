const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    getOrder: function(){
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}
const burgerComboMeal = {
    sandwichType: "Burger",
    fries: false,
    drinkSize: "Large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
console.table(restaurant.getOrder())
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()