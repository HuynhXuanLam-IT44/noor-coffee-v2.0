import {
	Button,
	CircularProgress,
	Container,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoSection.elements";
import { Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const InfoSection = () => {
	const aboutData = useSelector((state) => state.api.about);

	const classes = useStyles();
	return (
		<Element name="infoSection">
			<div className={classes.info}>
				{!aboutData ? (
					<div className={classes.spinner}>
						<CircularProgress />
					</div>
				) : (
					<Container maxWidth="lg">
						<div className={classes.infoRow}>
							<div className={classes.infoColumn}>
								<div className={classes.imgWrapper}>
									<LazyLoadImage
										src={aboutData.mainImage.asset.url}
										alt="imgWrapper"
										className={classes.img}
										effect="blur"
									/>
									<div className={classes.imgAbout}>
										<Typography variant="h3">ABOUT NOOR.</Typography>
									</div>
								</div>
							</div>
							<div className={classes.infoColumn}>
								<div className={classes.textWrapper}>
									<Typography variant="h4" className={classes.text}>
										{aboutData.title}
									</Typography>
									<div>
										<BlockContent
											blocks={aboutData.body}
											projectId="1nauekv7"
											dataset="production"
											className={classes.blockContent}
										/>
									</div>
									<Link to="/about">
										<Button variant="contained" className={classes.button}>
											Về chúng tôi
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</Container>
				)}
			</div>
		</Element>
	);
};

export default InfoSection;
