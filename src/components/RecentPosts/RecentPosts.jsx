import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./RecentPosts.elements";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const RecentPosts = ({ posts }) => {
	const classes = useStyles();

	return (
		<div className={classes.recentPosts}>
			<div className={classes.header}>
				<Typography variant="h4" className={classes.headerText}>
					TIN TỨC GẦN ĐÂY
				</Typography>
			</div>
			{posts.map((post, index) => (
				<div key={index}>
					<Link to={"/blog/" + post.slug.current} className={classes.post}>
						<div className={classes.postImg}>
							<LazyLoadImage
								src={post.mainImage.asset.url}
								alt={post.mainImage.asset._id}
								className={classes.img}
								effect="blur"
							/>
						</div>
						<div className={classes.content}>
							<p className={classes.title}>{post.title}</p>
							<div className={classes.date}>
								{new Date(post.publishedAt)
									.toLocaleDateString("en-GB")
									.split("/")
									.join("/")}
							</div>
						</div>
					</Link>
				</div>
			))}
			<div className={classes.footer}>
				<Typography variant="h4" className={classes.headerText}>
					MẠNG XÃ HỘI
				</Typography>
			</div>
			<div className={classes.social}>
				<a
					className={`${classes.socialLink} ${classes.facebook}`}
					href="https://facebook.com/noorcoffeedn"
					target="__blank"
					aria-label="Facebook"
				>
					<FaFacebook />
				</a>
				<a
					className={`${classes.socialLink} ${classes.instagram}`}
					href="https://instagram.com/noorcoffeedn"
					target="__blank"
					aria-label="Instagram"
				>
					<FaInstagram />
				</a>
			</div>
		</div>
	);
};

export default RecentPosts;
