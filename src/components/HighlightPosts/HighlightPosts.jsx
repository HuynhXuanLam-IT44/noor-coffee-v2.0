import {
	Button,
	CircularProgress,
	Container,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { estimateReadingTime } from "../../utils";
import { useStyles } from "./HighlightPosts.elements";

const HighlightPosts = () => {
	const classes = useStyles();

	const posts = useSelector((state) => state.api.posts);
	const postsSlice = posts ? posts.slice(1, 4) : null;

	return (
		<div className={classes.highlightPosts}>
			{!posts ? (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			) : (
				<Container maxWidth="lg">
					<div className={classes.header}>
						<Typography variant="h4" className={classes.headerText}>
							BLOG
						</Typography>
						<Link to="/blog">
							<Button variant="contained" className={classes.button}>
								XEM THÊM
							</Button>
						</Link>
					</div>
					<div className={classes.firstPost}>
						<Link
							to={"/blog/" + posts[0].slug.current}
							className={classes.firstPostLink}
						>
							<div
								className={classes.postImg}
								style={{
									backgroundImage: `url(${posts[0].mainImage.asset.url})`,
								}}
							></div>
						</Link>

						<div className={classes.content}>
							<p className={classes.title}>{posts[0].title}</p>
							<p className={classes.description}>{posts[0].description}</p>
							<div className={classes.footer}>
								<Link to={"/blog/" + posts[0].slug.current}>
									<Button variant="contained" className={classes.button}>
										Xem thêm
									</Button>
								</Link>
								<p className={classes.description}>
									{estimateReadingTime(posts[0].body)}
								</p>
							</div>
						</div>
					</div>
					<div className={classes.posts}>
						{postsSlice.map((post, index) => (
							<div className={classes.post} key={index}>
								<Link
									to={"/blog/" + post.slug.current}
									className={classes.postLink}
								>
									<div
										className={classes.postImg}
										style={{
											backgroundImage: `url(${post.mainImage.asset.url})`,
										}}
									></div>
								</Link>

								<div className={classes.content}>
									<p className={classes.title}>{post.title}</p>
									<p className={classes.description}>{post.description}</p>
									<div className={classes.footer}>
										<Link to={"/blog/" + post.slug.current}>
											<Button variant="contained" className={classes.button}>
												Xem thêm
											</Button>
										</Link>
										<p className={classes.description}>
											{estimateReadingTime(post.body)}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			)}
		</div>
	);
};

export default HighlightPosts;
