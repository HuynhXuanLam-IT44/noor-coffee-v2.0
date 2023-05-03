import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";
export const useStyles = makeStyles((theme) => ({
	instaPosts: {
		color: "black",
		padding: "50px 0",
		background: `url(${bgImg}) no-repeat left top, #f5f5f5`,
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	posts: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	header: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "20px",
	},
	headerText: {
		color: "rgba(246,194,73, 1)",
		fontWeight: 600,
		position: "relative",
		marginBottom: "10px",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "-4px",
			width: "100%",
			border: "2px solid rgba(246,194,73, 1)",
		},
	},
	headerSubtitleWrapper: {
		display: "flex",
		flexDirection: "row",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			marginLeft: "0px",
		},
	},
	headerSubtitle: {
		"&:nth-child(2)": {
			marginLeft: "10px",
		},
		[theme.breakpoints.down("md")]: {
			"&:nth-child(2)": {
				marginLeft: "0px",
			},
		},
	},
	listImage: {
		display: "flex",
		flexWrap: "wrap",
		flexGrow: "1",
		justifyContent: "center",
		alignItems: "center",
		// flex: "0 0 calc(33.333% - 33px)",
		minHeight: "600px",
		position: "relative",
	},
	postImgWrapper: {
		position: "relative",
		width: "350px",
		height: "350px",

		margin: "10px",

		"&::after": {
			content: '""',
			display: "block",
			paddingBottom: "100%",
		},

		[theme.breakpoints.down("md")]: {
			width: "150px",
			height: "150px",
		},
	},
	img: {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "10px",
		transition: "all .2s ease-in-out",

		"&:hover": {
			transform: "scale(1.1)",
		},
	},
	footer: {
		marginTop: "20px",
	},
	button: {
		minWidth: "350px",

		borderRadius: "20px",
		background: "rgba(246,194,73, 1)",

		color: "black",
		fontSize: "20px",
		fontWeight: "bold",

		transition: "all 0.3s ease-in-out",

		"&:hover": {
			background: "rgba(246,194,73, 0.9)",
			color: "white",
		},

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	iconInsta: {
		fontSize: "24px",
		marginRight: "10px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
