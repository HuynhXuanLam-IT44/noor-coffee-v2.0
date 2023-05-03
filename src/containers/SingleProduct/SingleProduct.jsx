import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
import {
	COFFEE,
	COLDBREW,
	JUICE,
	MACCHIATO,
	TEA,
	YOGURT,
} from "../../app/ItemTypes";
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
	const [singleProduct, setSingleProduct] = useState(null);
	const [spinner, setSpinner] = useState(true);

	const special = useSelector((state) => state.api.products.special);

	const { slug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!special) {
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
	}, [dispatch, special]);

	useEffect(() => {
		fetchSingleProduct(slug)
			.then((data) => {
				setSingleProduct(data[0]);
			})
			.catch((error) => console.log("error: ", error));
	}, [slug]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<SingleProduct product={singleProduct} special={special} />
				</>
			)}
		</div>
	);
};

export default SingleProductContainer;
