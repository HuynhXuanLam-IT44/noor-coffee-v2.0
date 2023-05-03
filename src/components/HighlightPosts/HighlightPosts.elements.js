import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg_blog_home.webp";

export const useStyles = makeStyles((theme) => ({
	highlightPosts: {
		color: "black",
		padding: "80px 0",
		background: `url(${bgImg}) no-repeat right top, #191919`,
		[theme.breakpoints.down("md")]: {},
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	headerText: {
		color: "white",
		fontWeight: 600,
		position: "relative",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "0",
			width: "70%",
			border: "2px solid rgba(246,194,73, 1)",
		},
	},
	button: {
		borderRadius: "20px",
		fontSize: "20px",
		background: "rgba(246,194,73, 1)",
		color: "black",
		fontWeight: "bold",
		margin: "5px 0",
		transition: "all 0.3s ease-in-out",

		"&:hover": {
			background: "rgba(246,194,73, 0.9)",
			color: "white",
		},

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	firstPost: {
		margin: "50px 0",
		background: "#fff 50%",
		flex: "0 0 100%",
		overflow: "hidden",
		borderRadius: "10px",
	},
	firstPostLink: {
		maxHeight: "400px",
		position: "relative",
		display: "block",
		overflow: "hidden",

		"&::before": {
			content: '""',
			position: "relative",
			display: "block",
			paddingTop: "48%",
		},
	},

	content: {
		padding: "25px",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},

	title: {
		fontSize: "24px",
		textTransform: "uppercase",
		fontWeight: "600",
		height: "53px",
		lineHeight: "26px",
		overflow: "hidden",
		display: "block",
		// eslint-disable-next-line
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: "2",
	},
	description: {
		padding: "20px 0",
		fontSize: "20px",
		height: "93px",
		lineHeight: "24px",
		overflow: "hidden",
		display: "block",
		// eslint-disable-next-line
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: "3",
	},
	posts: {
		display: "flex",
		flexDirection: "row",
		width: "100%",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	post: {
		margin: "0 15px 30px",
		background: "#fff 50%",

		flex: "0 0 calc(33.333% - 30px)",
		overflow: "hidden",

		borderRadius: "10px",
		minHeight: "342px",

		transition: "all .2s ease-in-out",

		"&:hover": {
			transform: "scale(1.05)",
		},
	},

	postLink: {
		position: "relative",
		display: "block",
		overflow: "hidden",

		"&::before": {
			content: '""',
			position: "relative",
			display: "block",
			paddingTop: "48%",
		},
	},

	postImg: {
		backgroundSize: "cover",
		background: "#c5d2d9 no-repeat 50%",
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
	},
}));
