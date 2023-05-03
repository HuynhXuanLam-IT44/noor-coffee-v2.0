import React from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";

import { useStyles } from "./ProductsList.elements";
import {
	CircularProgress,
	Container,
	Typography,
	Button,
} from "@material-ui/core";
import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { products as productsId } from "../../data";

const ProductsList = ({ products }) => {
	const classes = useStyles();

	const scrollToCategory = (id) => {
		scroller.scrollTo(`${id}`, { smooth: true, duration: 1000, offset: -90 });
	};

	return (
		<>
			{!products ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Element name="productList">
					<div className={classes.productsList}>
						<Container maxWidth="lg" className={classes.flexBox}>
							<div className={classes.sidebar}>
								<aside className={classes.sidebarMenu}>
									<ul>
										{productsId.map((product, index) => (
											<li
												key={index}
												onClick={() => scrollToCategory(product.id)}
												className={classes.sidebarItem}
											>
												{product.name}
											</li>
										))}
									</ul>
								</aside>
							</div>
							<div className={classes.products}>
								{productsId.map((product, index) => (
									<Element name={product.id} key={index}>
										<div className={classes.category}>
											<div className={classes.header}>
												<Typography variant="h4" className={classes.headerText}>
													{product.name}
												</Typography>
											</div>
											<div className={classes.listProduct}>
												{products[product.id].map((productCategory, index) => (
													<div className={classes.product} key={index}>
														<div className={classes.productImage}>
															<Link
																to={"/products/" + productCategory.slug.current}
															>
																<LazyLoadImage
																	src={productCategory.mainImage.asset.url}
																	alt={productCategory.mainImage.asset._id}
																	className={classes.img}
																	effect="blur"
																/>
																{productCategory.new && (
																	<span className={classes.newLabel}>
																		new <FaAngellist />
																	</span>
																)}
																{productCategory.bestSeller && (
																	<span className={classes.trendLabel}>
																		<AiOutlineLike /> Bán chạy nhất
																	</span>
																)}
															</Link>
														</div>
														<div className={classes.content}>
															<p className={classes.title}>
																{productCategory.title}
															</p>
															<p className={classes.price}>
																{productCategory.price}.000Đ
															</p>
															<Link
																to={"/products/" + productCategory.slug.current}
															>
																<Button
																	variant="contained"
																	className={`${classes.button} ${classes.buttonProduct}`}
																>
																	TÌM HIỂU THÊM
																</Button>
															</Link>
														</div>
													</div>
												))}
											</div>
										</div>
									</Element>
								))}
							</div>
						</Container>
					</div>
				</Element>
			)}
		</>
	);
};

export default ProductsList;
