import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
	useEffect(() => {
		document.title = "Blog - Noor - Coffee & Tea";
	}, []);

	return (
		<div>
			<BlogContainer />
		</div>
	);
};

export default Blog;
