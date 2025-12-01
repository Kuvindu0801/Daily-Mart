const products = [
    // Vegetables
    { id: 1, name: 'Carrot 500g', price: 164.00, category: 'vegetables' },
    { id: 2, name: 'Tomatoes 500g', price: 176.00, category: 'vegetables' },
    { id: 3, name: 'Pumpkin 500g', price: 50.00, category: 'vegetables' },
    { id: 4, name: 'Green Beans 500g', price: 530.00, category: 'vegetables' },
    { id: 5, name: 'Brinjals 500g', price: 260.00, category: 'vegetables' },
    { id: 6, name: 'Ladies Fingers 500g', price: 144.00, category: 'vegetables' },
    { id: 7, name: 'Big Onion 500g', price: 134.00, category: 'vegetables' },
    { id: 8, name: 'Beet Root 500g', price: 280.00, category: 'vegetables' },

    // Fruits
    { id: 9, name: 'Pineapple', price: 164.00, category: 'fruits' },
    { id: 10, name: 'Imported Orange 600g', price: 1176.00, category: 'fruits' },
    { id: 11, name: 'Green Apple 700g', price: 1260.00, category: 'fruits' },
    { id: 12, name: 'Kolikuttu Plantain 500g', price: 160.00, category: 'fruits' },
    { id: 13, name: 'Guava 500g', price: 290.00, category: 'fruits' },
    { id: 14, name: 'Passion fruit 500g', price: 571.00, category: 'fruits' },
    { id: 15, name: 'Woodapple 500g', price: 265.00, category: 'fruits' },
    { id: 16, name: 'Mango 500g', price: 160.00, category: 'fruits' },

    // Meat
    { id: 17, name: 'Chicken Drumstick Skin on 1kg', price: 1290.00, category: 'meat' },
    { id: 18, name: 'Chicken Liver 1kg', price: 990.00, category: 'meat' },
    { id: 19, name: 'Chicken Drumsticks Skinless 1kg', price: 1600.00, category: 'meat' },
    { id: 20, name: 'Local Mutton 1kg', price: 4500.00, category: 'meat' },
    { id: 21, name: 'Beef Cubes 1kg', price: 3600.00, category: 'meat' },
    { id: 22, name: 'Curry Pork 1kg', price: 4300.00, category: 'meat' },
    { id: 23, name: 'Chicken Thigh 1kg', price: 1440.00, category: 'meat' },
    { id: 24, name: 'Chicken Breast 1kg', price: 2050.00, category: 'meat' },

    // Fish
    { id: 25, name: 'Thalapath Slice 500g', price: 1360.00, category: 'fish' },
    { id: 26, name: 'Peeled Prawns 250g', price: 1200.00, category: 'fish' },
    { id: 27, name: 'Tuna Slices 250g', price: 440.00, category: 'fish' },
    { id: 28, name: 'Parae Small 1kg', price: 1850.00, category: 'fish' },
    { id: 29, name: 'Cleaned Cuttlefish 1kg', price: 2800.00, category: 'fish' },
    { id: 30, name: 'Hurulla 1kg', price: 1300.00, category: 'fish' },
    { id: 31, name: 'Linna 1kg', price: 1250.00, category: 'fish' },
    { id: 32, name: 'Sea Crab Large 1kg', price: 2280.00, category: 'fish' },

    //Grocery
    { id: 33, name: 'Bread Loaf', price: 145.00, category: 'grocery' },
    { id: 34, name: 'Egg (1)', price: 45.00, category: 'grocery' },
    { id: 35, name: 'Rice (Kakulu) 1kg', price: 200.00, category: 'grocery' },
    { id: 36, name: 'White Sugar 1kg', price: 210.00, category: 'grocery' },
    { id: 37, name: 'Dhal 1kg', price: 560.00, category: 'grocery' },
    { id: 38, name: 'Coconut Oil 1L', price: 990.00, category: 'grocery' },
    { id: 39, name: 'Coconut 1kg', price: 134.00, category: 'grocery' },
    { id: 40, name: 'Flour 1kg', price: 280.00, category: 'grocery' },

    // Beverages
    { id: 41, name: 'Cocacola 1L', price: 300.00, category: 'beverages' },
    { id: 42, name: 'Sprite 1L', price: 300.00, category: 'beverages' },
    { id: 43, name: 'Suncrush 150ml', price: 180.00, category: 'beverages' },
    { id: 44, name: 'Kist Ride 350ml', price: 350.00, category: 'beverages' },
    { id: 45, name: 'Necto 1.5L', price: 400.00, category: 'beverages' },
    { id: 46, name: 'Kotmale Yogurt Drink 150ml', price: 150.00, category: 'beverages' },
    { id: 47, name: 'Orange Juice 1L', price: 550.00, category: 'beverages' },
    { id: 48, name: 'Cream Soda 1L', price: 300.00, category: 'beverages' }
];

let customers = [];
let orders = [];
let cart = [];
let nextCustomerId = 1;
let nextOrderId = 1;


function renderProducts(category) {
    const grid = document.getElementById('productsGrid');

    
    if (!category) {
        grid.innerHTML = `
            <div class="grid-items" data-category="vegetables">
                <div class="img-card" onclick="renderProducts('vegetables')">
                    <img src="assets/img/veg 2.jpg" alt="Vegetables">
                    <h3>Vegetables</h3>
                </div>
            </div>
            <div class="grid-items" data-category="fruits">
                <div class="img-card" onclick="renderProducts('fruits')">
                    <img src="assets/img/fruits.jpg" alt="Fruits">
                    <h3>Fruits</h3>
                </div>
            </div>
            <div class="grid-items" data-category="meat">
                <div class="img-card" onclick="renderProducts('meat')">
                    <img src="assets/img/meat" alt="Meat">
                    <h3>Meat</h3>
                </div>
            </div>
            <div class="grid-items" data-category="grocery">
                <div class="img-card" onclick="renderProducts('grocery')">
                    <img src="assets/img/grocery" alt="Grocery Items">
                    <h3>Grocery Items</h3>
                </div>
            </div>
            <div class="grid-items" data-category="fish">
                <div class="img-card" onclick="renderProducts('fish')">
                    <img src="assets/img/fish" alt="Fish">
                    <h3>Fish</h3>
                </div>
            </div>
            <div class="grid-items" data-category="beverages">
                <div class="img-card" onclick="renderProducts('beverages')">
                    <img src="assets/img/beverage" alt="Beverages">
                    <h3>Beverages</h3>
                </div>
            </div>
        `;
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);
    grid.innerHTML = filteredProducts.map(product => `
        <div class="grid-items" data-product-id="${product.id}">
            <div class="img-card" onclick="addToCart(${product.id})">
                <h3>${product.name}</h3>
                <div class="product-price">Rs. ${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}
// Customer Management
function addCustomer() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    if (!name || !phone) {
        alert('Please fill all customer fields');
        return;
    }
    const customer = { id: nextCustomerId++, name, phone };
    customers.push(customer);
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    renderCustomers();
}

function renderCustomers() {
    const tbody = document.getElementById('customersTable');
    tbody.innerHTML = customers.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteCustomer(${customer.id})" title="Delete Customer">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function deleteCustomer(id) {
    customers = customers.filter(c => c.id !== id);
    renderCustomers();
}

// Order Management
function renderOrders() {
    const tbody = document.getElementById('ordersTable');
    tbody.innerHTML = orders.length ? orders.map(order => {
        const customerName = customers.find(c => c.id === order.customerId)?.name || 'Walk-in';
        return `
            <tr>
                <td>${order.id}</td>
                <td>${customerName}</td>
                <td>Rs. ${order.total.toFixed(2)}</td>
                <td>${order.date}</td>
            </tr>
        `;
    }).join('') : `<tr><td colspan="4" style="text-align:center; color:#888;">No orders yet</td></tr>`;
}

// Tab management for switching between Customers, Products, and Orders
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    const eventTarget = event?.target || this;
    eventTarget.classList.add('active');
    const tabToShow = document.getElementById(tabName);
    if (tabToShow) tabToShow.classList.add('active');
}

// Initialize app
function init() {
    renderProducts();
    renderCart();
    updateSummary();
    renderCustomers();
    renderOrders();
}

init();

const categoryHandlers = {
    vegetables: () => renderProducts('vegetables'),
    fruits: () => renderProducts('fruits'),
    meat: () => renderProducts('meat'),
    fish: () => renderProducts('fish'),
    grocery: () => renderProducts('bakery'),
    beverages: () => renderProducts('beverages')
};
