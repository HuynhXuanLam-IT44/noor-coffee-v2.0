import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "1nauekv7",
	dataset: "production",
	useCdn: "true",
});
