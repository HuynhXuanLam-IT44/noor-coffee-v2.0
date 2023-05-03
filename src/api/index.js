import sanityClient from "../client";

export const fetchAboutData = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "about"]{
			title,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data[0];
		})
		.catch((error) => console.log("error", error));
};

export const fetchBlogData = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "post"]{
				title,
				slug,
				author,
				mainImage{
					asset->{
						_id,
						url
					},
					alt
				},
				body,
				publishedAt,
				description
			}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchInstaPost = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "insta"]{
			publishedAt,
			url,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchHeroData = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "hero"]{
			title,
			subTitle,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchProduct = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "product"]{
			title,
			slug,
			projectType,
			special,
			new,
			bestSeller,
			price,
			body,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchHeroProduct = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "heroProduct"]{
			title,
			subTitle,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchHeroBlog = async () => {
	return await sanityClient
		.fetch(
			`*[_type == "heroBlog"]{
			title,
			subTitle,
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchSinglePost = async (slug) => {
	return await sanityClient
		.fetch(
			`*[slug.current == "${slug}"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url
					}
				},
				body,
				"name": author->name,
				"authorImage": author->image,
				publishedAt
			}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};

export const fetchSingleProduct = async (slug) => {
	return await sanityClient
		.fetch(
			`*[slug.current == "${slug}"]{
				title,
				slug,
				mainImage{
					asset->{
						_id,
						url
					}
				},
				body,
				projectType,
				special,
				new,
				bestSeller,
				price
			}`
		)
		.then((data) => {
			return data;
		})
		.catch((error) => console.log("error", error));
};
