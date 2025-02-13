// Task 5

let orders = [
    { id: 101, customer: "Alice", total: 300 },
    { id: 102, customer: "Bob", total: 450 },
    { id: 103, customer: "Charlie", total: 200 }
];

function findOrders (orderList, id) {
    return orderList.find(order => order.id === id);
}

console.log(findOrders(orders, 101));
let some_order = findOrders(orders, 101);
console.log(`${some_order.customer} has an order id: ${some_order.id} with a total of: $${some_order.total}`);

// Task 6

let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    },// This method removes lastest item
    removeLatestItem() {
        this.items.pop();
    },//this method removes the first item
    removeFirstItem() {
        this.items.shift();
    }
};

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3);

console.log(inventory.items); // Viewing all items
inventory.removeLatestItem(); // Removing latest
console.log(inventory.items); // View items remaining
inventory.removeFirstItem(); // Removing first 
console.log(inventory.items); // View items remaining