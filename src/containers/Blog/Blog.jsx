import React, { useState, useEffect } from "react";
import { RecentPosts, Post, SpinnerBook, HeroPage } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setHeroBlog, setPosts } from "../../app/slice/fetchApi";
import { fetchBlogData, fetchHeroBlog } from "../../api";
import { useStyles } from "./Blog.elements";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { Element } from "react-scroll";

const Blog = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const posts = useSelector((state) => state.api.posts);

	const recentPosts = posts ? posts.slice(0, 3) : null;
	const heroBlog = useSelector((state) => state.api.heroBlog);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!posts) {
			fetchBlogData()
				.then((posts) => {
					let postSort = [];
					postSort = posts.slice().sort((value1, value2) => {
						const dateValue1 = new Date(value1.publishedAt).getTime();
						const dateValue2 = new Date(value2.publishedAt).getTime();
						return dateValue1 < dateValue2 ? 1 : -1;
					});
					const action = setPosts(postSort);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, posts]);

	useEffect(() => {
		if (!heroBlog) {
			fetchHeroBlog()
				.then((data) => {
					const action = setHeroBlog(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroBlog]);

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
					<HeroPage slides={heroBlog} idScrollTo="blog" />
					<div className={classes.container}>
						<Element name="blog">
							<Container maxWidth="lg" className={classes.blog}>
								<div className={classes.posts}>
									<div className={classes.header}>
										<Typography variant="h4" className={classes.headerText}>
											TIN TỨC
										</Typography>
									</div>
									<>
										{!posts ? (
											<div className={classes.spinner}>
												<CircularProgress />
											</div>
										) : (
											posts.map((post, index) => (
												<Post post={post} key={index} />
											))
										)}
									</>
								</div>
								<div className={classes.recentPosts}>
									{!recentPosts ? (
										<div className={classes.spinner}>
											<CircularProgress />
										</div>
									) : (
										<>
											<RecentPosts posts={recentPosts} />
										</>
									)}
								</div>
							</Container>
						</Element>
					</div>
				</>
			)}
		</div>
	);
};

export default Blog;
