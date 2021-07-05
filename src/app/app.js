const {remote} = require('electron');
main = remote.require('./main');

const orderForm = document.getElementById('orderForm');

const date = document.getElementById('date');
const comboName = document.getElementById('comboName');
const quantity = document.getElementById('quantity');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const pendingOrders = document.getElementById('pendingOrders');

let editingStatus = false;
let editOrderId = '';

orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newOrder = {
        date: date.value,
        comboName: comboName.value,
        quantity: quantity.value,
        address: address.value,
        phone: phone.value
    }

    if(!editingStatus){
        await main.createOrder(newOrder);
    }else{
        console.log(editOrderId);
        await main.updateOrder(editOrderId, newOrder);
        editingStatus = false;
        editOrderId = '';
    }

    orderForm.reset();
    date.focus();
    await getOrders();
});

function renderOrders(orders) {
    pendingOrders.innerHTML = '';
    orders.forEach(order => {
        pendingOrders.innerHTML +=
            `<div class="card card-body my-2">
                <h4>${order.comboName}</h4>
                <p>${order.quantity}</p>
                <p>${order.address}</p>
                <p>${order.phone}</p>
                <span>
                    <button class="btn btn-danger" onclick="deleteOrder('${order.id}')">ELIMINAR</button>             
                    <button class="btn btn-warning" onclick="editOrder('${order.id}')">EDITAR</button>             
                </span>
            </div>`
    });
}

const getOrders = async () => {
    const results = await main.getOrders();
    renderOrders(results);
}

async function init() {
    await getOrders();
}

async function deleteOrder(orderId){
    const response = confirm('¿Está seguro de eliminar el pedido seleccionado?')
    if(response){
        await main.deleteOrder(orderId);
        await getOrders();
    }
}

async function editOrder(orderId){
    const order = await main.getOrderById(orderId);

    date.value = order.date;
    comboName.value = order.comboName;
    quantity.value = order.quantity;
    address.value = order.address;
    phone.value = order.phone;

    editingStatus = true;
    editOrderId = order.id;
}

init();
