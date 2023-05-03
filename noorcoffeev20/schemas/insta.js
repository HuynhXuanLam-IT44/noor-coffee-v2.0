export default {
	name: "insta",
	title: "Insta",
	type: "document",
	fields: [
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "url",
			title: "Link (URL)",
			type: "string",
		},
	],
};
