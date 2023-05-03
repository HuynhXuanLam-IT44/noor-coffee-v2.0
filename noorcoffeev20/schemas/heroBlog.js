export default {
	name: "heroBlog",
	title: "HeroBlog",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "subTitle",
			title: "SubTitle",
			type: "string",
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
