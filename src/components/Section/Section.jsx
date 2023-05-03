import React from "react";

import {
	CircularProgress,
	Container,
	Button,
	Typography,
} from "@material-ui/core";
import { useStyles } from "./Section.elements";
import { FiShoppingCart } from "react-icons/fi";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import bgDark from "../../assets/img/bg_blog_home.webp";
import bgWhite from "../../assets/img/bg-white.webp";

const Section = ({ subHeader, header, description, linkBtn, img, dark }) => {
	const classes = useStyles();

	return (
		<div
			className={classes.section}
			style={{
				background: dark
					? `url(${bgDark}) no-repeat right top, #191919`
					: `url(${bgWhite}) no-repeat right top, #f5f5f5`,
				color: dark ? "white" : "black",
			}}
		>
			{!subHeader ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Container maxWidth="lg">
					<div className={classes.infoRow}>
						<div className={classes.infoColumn}>
							<div className={classes.imgWrapper}>
								<LazyLoadImage
									src={img}
									alt="img"
									className={classes.img}
									effect="blur"
								/>
							</div>
						</div>
						<div className={classes.infoColumn}>
							<div className={classes.textWrapper}>
								<div>
									<p className={classes.subHeader}>{subHeader}</p>
									<Typography
										variant="h4"
										className={classes.header}
										style={{ color: dark ? "white" : "black" }}
									>
										{header}
									</Typography>
								</div>
								<p className={classes.description}>{description}</p>
								<a
									href={linkBtn}
									target="_blank"
									rel="noopener noreferrer"
									className={classes.linkBtn}
								>
									<Button variant="contained" className={classes.button}>
										<span className={classes.icon}>
											<FiShoppingCart />
										</span>
										Đặt hàng ngay
									</Button>
								</a>
							</div>
						</div>
					</div>
				</Container>
			)}
		</div>
	);
};

export default Section;
