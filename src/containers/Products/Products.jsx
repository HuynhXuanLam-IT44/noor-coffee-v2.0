import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
	COFFEE,
	COLDBREW,
	JUICE,
	MACCHIATO,
	TEA,
	YOGURT,
} from "../../app/ItemTypes";
import {
	setProductSpecial,
	setHeroProduct,
	setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.api.productsList);
	const heroProduct = useSelector((state) => state.api.heroProduct);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!productsList) {
			fetchProduct()
				.then((products) => {
					const special = [];

					const coffee = [];
					const coldbrew = [];
					const tea = [];
					const macchiato = [];
					const yogurt = [];
					const juice = [];

					products.map((product, index) => {
						if (product.projectType === COFFEE) coffee.push(product);
						else if (product.projectType === COLDBREW) coldbrew.push(product);
						else if (product.projectType === TEA) tea.push(product);
						else if (product.projectType === MACCHIATO) macchiato.push(product);
						else if (product.projectType === YOGURT) yogurt.push(product);
						else if (product.projectType === JUICE) juice.push(product);

						product.special && special.push(product);

						return null;
					});
					let action;
					const object = {
						special: special,
						coffee: coffee,
						coldbrew: coldbrew,
						tea: tea,
						macchiato: macchiato,
						yogurt: yogurt,
						juice: juice,
					};
					action = setProductsList(object);
					dispatch(action);
					action = setProductSpecial(special);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, productsList]);

	useEffect(() => {
		if (!heroProduct) {
			fetchHeroProduct()
				.then((data) => {
					const action = setHeroProduct(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroProduct]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					{" "}
					<HeroPage slides={heroProduct} idScrollTo="productList" />
					<ProductsList products={productsList} />
				</>
			)}
		</>
	);
};

export default Products;
