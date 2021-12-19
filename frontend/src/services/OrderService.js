// to display the order 
//GET 
function OrderService() {
    const orderData = async (products, token) => {
        let ids = [];
        products.map((product) => ids.push(product.id));
        let result = await fetch("http://172.20.241.192:3000/api/order/checkout", {
            method: "POST",
            body: JSON.stringify({ products: ids }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        return result;
    };

    const getMyOrders = async (token) => {
        let result = await fetch("http://172.20.241.192:3000/api/order", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => res.json());
        return result;
    };
    return { orderData, getMyOrders };
}
export default OrderService;

