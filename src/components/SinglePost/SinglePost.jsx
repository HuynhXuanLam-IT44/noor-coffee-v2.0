import React, { useEffect } from "react";

import {
	CircularProgress,
	Container,
	Typography,
	Button,
} from "@material-ui/core";
import { useStyles } from "./SinglePost.elements";

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import HeroPage from "../HeroPage/HeroPage";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { estimateReadingTime } from "../../utils";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const SinglePost = ({ post, recentPosts }) => {
	const classes = useStyles();

	useEffect(() => {
		if (post) {
			document.title = `${post.title} - NOOR - Coffee & Tea`;
		}
	}, [post]);

	const heroPost = post
		? [
				{
					mainImage: {
						asset: {
							url: post.mainImage.asset.url,
							_id: post.mainImage.asset._id,
						},
					},
					subTitle: "   ",
					title: "   ",
				},
		  ]
		: null;

	return (
		<div className={classes.singlePost}>
			{!post ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<div>
					<HeroPage slides={heroPost} idScrollTo="singlePost" />
					<Element name="singlePost">
						<div className={classes.postComponent}>
							<Container maxWidth="lg">
								<div className={classes.post}>
									<div className={classes.breadcrumbs}>
										<Link to="/blog">Blog </Link>
										<p> | Tin tức</p>
									</div>
									<div className={classes.header}>
										<Typography variant="h4" className={classes.headerText}>
											{post.title}
										</Typography>
										<div className={classes.authorDate}>
											<div className={classes.date}>
												{new Date(post.publishedAt)
													.toLocaleDateString("en-GB")
													.split("/")
													.join("/")}
											</div>
											<div className={classes.author}>
												<img
													src={urlFor(post.authorImage).url()}
													alt={post.name}
													className={classes.authorImg}
												/>
												<a
													href="https://lunaliveandlearn.com/"
													target="__blank"
													aria-label="Author"
													className={classes.authorName}
												>
													{post.name}
												</a>
											</div>
										</div>
									</div>
									<div className={classes.blockContent}>
										<BlockContent
											blocks={post.body}
											projectId="1nauekv7"
											dataset="production"
										/>
									</div>
								</div>
							</Container>
						</div>
					</Element>
					<div className={classes.recentPosts}>
						<Container maxWidth="lg" className={classes.a}>
							<div className={classes.headerRecentPosts}>
								<Typography
									variant="h4"
									className={classes.headerRecentPostsText}
								>
									BÀI VIẾT GẦN ĐÂY
								</Typography>
							</div>
							<div className={classes.postsPreview}>
								{!recentPosts ? (
									<div className={classes.spinner}>
										<CircularProgress />
									</div>
								) : (
									recentPosts.map((postPreview, index) => (
										<div className={classes.postPreview} key={index}>
											<Link to="/blog" className={classes.postLink}>
												<div
													className={classes.postImg}
													style={{
														backgroundImage: `url(${postPreview.mainImage.asset.url})`,
													}}
												></div>
											</Link>

											<div className={classes.content}>
												<p className={classes.title}>{postPreview.title}</p>
												<p className={classes.description}>
													{postPreview.description}
												</p>
												<div className={classes.footer}>
													<Link to={"/blog/" + postPreview.slug.current}>
														<Button
															variant="contained"
															className={classes.button}
														>
															Xem thêm
														</Button>
													</Link>
													<p className={classes.description}>
														{estimateReadingTime(postPreview.body)}
													</p>
												</div>
											</div>
										</div>
									))
								)}
							</div>
						</Container>
					</div>
				</div>
			)}
		</div>
	);
};

export default SinglePost;
