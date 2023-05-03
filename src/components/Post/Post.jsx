import React from "react";
import { Link } from "react-router-dom";
import { estimateReadingTime } from "../../utils";
import { useStyles } from "./Post.elements";
import { Button } from "@material-ui/core";

const Post = ({ post }) => {
	const classes = useStyles();

	return (
		<div className={classes.firstPost}>
			<Link to={"/blog/" + post.slug.current} className={classes.firstPostLink}>
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
	);
};

export default Post;
