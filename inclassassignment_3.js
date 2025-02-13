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

// Task 7

let employees = [
    { name: "Alice", position: "Developer", salary: 70000 },
    { name: "Bob", position: "Designer", salary: 60000 },
    { name: "Charlie", position: "Manager", salary: 90000 }
];

function findEmployee(employeeList, name) {
    return employeeList.find(employee => employee.name === name);
}

console.log(findEmployee(employees, "Charlie"));

// Task 8

let orders1 = [
    { id: 1, customer: "Alice" }, 
    { id: 2, customer: "Bob" }
];

let orders2 = [
    { id: 3, customer: "Charlie" },
    { id: 4, customer: "David" }
];

function combineOrders(orderList1, orderList2) {
    return [...orderList1, ...orderList2];
}

console.log(combineOrders(orders1, orders2));