const { BrowserWindow, Notification } = require('electron');
const { getConnection } = require('./database');
let window

function createWindow(){
    window = new BrowserWindow({
        width: 1366,
        height:768,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('src/ui/index.html');
}

async function createOrder(order){
    try{
        const conn = await getConnection();
        console.log(order);
        const result = await conn.query('INSERT INTO orders set ?', order);
        new Notification({
            title: 'Pedidos',
            body: 'Pedido cargado correctamente'
        }).show();

        order.id = result.insertId;
        return order;
    }catch(error){
        console.log(error);
    }
}

async function getOrders(){
    const conn = await getConnection();
    const results = conn.query('SELECT * FROM orders');

    return results;
}

async function deleteOrder(orderId){
    const conn = await getConnection();
    await conn.query('DELETE FROM orders WHERE id = ?', orderId);
}

async function getOrderById(orderId){
    const conn = await getConnection();
    const result = await conn.query('SELECT * FROM orders WHERE id = ?', orderId);
    return result[0];
}

async function updateOrder(orderId, order){
    console.log(orderId, order);
    const conn = await getConnection();
    const result = await conn.query('UPDATE orders SET ? WHERE id = ?', [order, orderId]);
    console.log(result);
    return result[0];
}

module.exports = {
    createWindow,
    createOrder,
    getOrders,
    deleteOrder,
    getOrderById,
    updateOrder
}
