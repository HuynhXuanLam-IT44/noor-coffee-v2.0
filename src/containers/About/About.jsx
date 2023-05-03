import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData, fetchSinglePost } from "../../api";
import { setPosts } from "../../app/slice/fetchApi";
import { SinglePost, SpinnerBook } from "../../components";

const AboutContainer = () => {
	const [singlePost, setSinglePost] = useState(null);
	const [spinner, setSpinner] = useState(true);

	const posts = useSelector((state) => state.api.posts);

	const recentPosts = posts ? posts.slice(0, 3) : null;

	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	useEffect(() => {
		fetchSinglePost("cau-chuyen-ve-noor")
			.then((data) => {
				setSinglePost(data[0]);
			})
			.catch((error) => console.log("error: ", error));
	}, []);

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

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<SinglePost post={singlePost} recentPosts={recentPosts} />
			)}
		</div>
	);
};

export default AboutContainer;
