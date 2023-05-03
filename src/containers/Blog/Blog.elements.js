import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
	container: {
		color: "black",
		background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
		[theme.breakpoints.down("md")]: {},
	},
	blog: {
		display: "flex",
		flexDirection: "row",

		padding: "80px 0",
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	posts: {
		width: "70%",
		padding: "0 10px",

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	recentPosts: {
		width: "30%",

		borderLeft: "2px solid rgba(246,194,73, 0.9)",
		paddingLeft: "10px",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	headerText: {
		color: "black",
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
}));
