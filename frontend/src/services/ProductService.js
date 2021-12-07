//for the user how puts the product online
//POST
function PostProductService() {
    const postProductData = async (name, price, description) => {
        if (name == null) {
            return "product name is empty";
        }
        if (price == null) {
            return "price is empty";
        }
        if (description == null) {
            return "description is empty";
        }
            let body = {
                name: name,
                price: price,
                description: description,
            };

            let result = fetch("http://localhost:3000/api/product", {
                method: "POST",
                body: body,
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json());
            return result;
    };
    return {postProductData};
}
export default PostProductService;

//PUT 
function PutProductService() {
    const putProductData = async (name, price, description) => {
        if (name == null) {
            return "product name is empty";
        }
        if (price == null) {
            return "price is empty";
        }
        if (description == null) {
            return "description is empty";
        }
            let body = {
                name: name,
                price: price,
                description: description,
            };

            let result = fetch("http://localhost:3000/api/product", {
                method: "PUT",
                body: body,
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json());
            return result;
    };
    return {putProductData};
}
export default PutProductService;

//DELETE
function DeleteProductService() {
    const deleteProductData = async (product_id) => {
        if (product_id == null) {
            return "delete";
        }
        
            let body = {
                product_id: product_id,
            };

            let result = fetch("http://localhost:3000/api/product/:id", {
                method: "DELETE",
                body: body,
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json());
            return result;
    };
    return {deleteProductData};
}
export default DeleteProductService;


//for the user how views the product 
//GET ONE
function GetProductService() {
    const getProductData = async (product_id) => {
        if (product_id == null) {
            return "";
        }
            let body = {
                product_id: product_id,
            };

            let result = fetch("http://localhost:3000/api/product/:id", {
                method: "GET",
                body: body,
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json());
            return result;
    };
    return {getProductData};
}
export default GetProductService;

//GET ALL
function GetProductsService() {
    const getProductsData = async () => {
            let result = fetch("http://localhost:3000/api/product", {
                method: "GET",
                body: body,
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json());
            return result;
    };
    return {getProductsData};
}
export default GetProductsService;