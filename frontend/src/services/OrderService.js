// to display the order 
//GET 
function OrderService() {
    const orderData = async ( product_id ) => {
        if (product_id == null) {
            return "you don't have any orders";
        }
        let body = { 
            product_id: product_id,
            
        };

        let result = await fetch("http://localhost:3000/api/order/:id", {
            method: "GET",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        return result;
    };
    return {orderData};
}
export default OrderService;

