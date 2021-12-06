//for the user how puts the product online
function ProductService() {
    const productData = async (productId, userId, name, price, description, status, dateOfPosting) => {
        if (productId == null) {
            return " "; //TODO
        }
        if (userId == null) {
            return " "; //TODO
        }
        if (name == null) {
            return "product name is empty";
        }
        if (price == null) {
            return "price is empty";
        }
        if (description == null) {
            return "description is empty";
        }
        if (status == null) {
            return " "; //TODO
        }
        if (dateOfPosting == null) {
            return "date is empty";
        }
    
            let body = {
                product_ID: productId,
                user_ID: userId,
                name: name,
                price: price,
                description: description,
                status: status,
                date_of_posting: dateOfPosting

            };

            let result = fetch("localhost", {
                method: "POST",
                body: body,
                headers: { "Content-Type": "application/json" }
            });
            return result;
    };
    return {productData};
}
export default ProductService;