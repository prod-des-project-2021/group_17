function ProductService() {
    
	const postProductData = async (name, price, description, files, category) => {
		let body = {
			name: name,
			price: price,
			description: description,
			files: files,
			category: category
		};

		let result = fetch('http://localhost:3000/api/product', {
			method: 'POST',
			body: body,
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => res.json());
		return result;
	};

	const putProductData = async (name, price, description) => {
		if (name == null) {
			return 'product name is empty';
		}
		if (price == null) {
			return 'price is empty';
		}
		if (description == null) {
			return 'description is empty';
		}
		let body = {
			name: name,
			price: price,
			description: description
		};

		let result = fetch('http://localhost:3000/api/product', {
			method: 'PUT',
			body: body,
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => res.json());
		return result;
	};

	const deleteProductData = async (product_id) => {
		if (product_id == null) {
			return 'delete';
		}

		let body = {
			product_id: product_id
		};

		let result = fetch('http://localhost:3000/api/product/:id', {
			method: 'DELETE',
			body: body,
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => res.json());
		return result;
	};

	const getProductsData = async () => {
		let result = fetch('http://localhost:3000/api/product', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => res.json());
		return result;
	};

	return { getProductsData, postProductData, putProductData, deleteProductData };
}
export default ProductService;
