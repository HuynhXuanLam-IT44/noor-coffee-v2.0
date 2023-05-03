export default {
	name: "about",
	title: "About",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};
