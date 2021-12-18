function ProductService() {

	const postProductData = async (name, price, description, files, category, token) => {
		let body = {
			name: name,
			price: price,
			description: description,
			files: files,
			category: category
		};

		let result = fetch('http://172.20.241.192:3000/api/product', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}).then((res) => res.json());
		return result;
	};

	const putProductData = async (name, category, files, price, description) => {
		if (name == null) {
			return 'product name is empty';
		}
		if (price == null) {
			return 'price is empty';
		}
		if (description == null) {
			return 'description is empty';
		}
		if (files == null) {
			return 'files is empty';
		}
		if (category == null) {
			return 'category is empty';
		}

		let body = {
			name: name,
			price: price,
			description: description
		};

		let result = fetch('http://172.20.241.192:3000/api/product', {
			method: 'PUT',
			body: body,
			headers: { 'Content-Type': 'application/json' }
		}).then((res) => res.json());
		return result;
	};

	const deleteProductData = async (product_id, token) => {
		if (product_id == null) {
			return 'delete';
		}

		let result = fetch('http://172.20.241.192:3000/api/product/' + product_id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}).then((res) => res.json());
		return result;
	};

	const getProductsData = async (token) => {
		let result = fetch('http://172.20.241.192:3000/api/product', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			}
		}).then((res) => res.json());
		return result;
	};

	return { getProductsData, postProductData, putProductData, deleteProductData };
}
export default ProductService;
