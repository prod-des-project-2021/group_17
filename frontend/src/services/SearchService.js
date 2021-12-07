//for searching a product by it's name
//GET 
function SearchService() {
    const searchData = async ( product_name ) => {
        if (product_name == null) {
            return "this type of product doesn't exist";
        }
        let body = { 
            product_name: product_name,
            
        };

        let result = await fetch("http://localhost:3000/api/search/", {
            method: "GET",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        return result;
    };
    return {searchData};
}
export default SearchService;