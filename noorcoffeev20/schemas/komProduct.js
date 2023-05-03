export default {
  name: "komProduct",
  title: "komProduct",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "special", title: "Special" },
          { value: "juice", title: "Juice" },
        ],
      },
    },
    {
      name: "special",
      title: "Special",
      type: "boolean",
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
    },
    {
      name: "bestSeller",
      title: "Best Seller",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
