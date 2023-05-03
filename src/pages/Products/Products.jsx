import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
	useEffect(() => {
		document.title = "Menu - NOOR - Coffee & Tea - Coworking Cafe";
	}, []);

	return (
		<>
			<ProductsContainer />
		</>
	);
};

export default Products;
