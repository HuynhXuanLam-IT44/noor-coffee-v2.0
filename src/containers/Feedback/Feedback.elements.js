import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
	feedback: {
		color: "black",
		background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
		[theme.breakpoints.down("md")]: {},
	},

	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	container: {
		padding: "80px 0",
		[theme.breakpoints.down("md")]: {
			padding: "30px 0",
		},
	},
	row: {
		alignItems: "center",

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column-reverse",
		},
	},
	column: {
		maxWidth: "50%",
		marginBottom: "15px",
		padding: "0 15px",

		flex: "1",
		flexBasis: "50%",

		[theme.breakpoints.down("md")]: {
			maxWidth: "100%",

			display: "flex",
			justifyContent: "center",
			flexBasis: "100%",
		},
	},

	textWrapper: {
		display: "flex",
		flexDirection: "column",
	},
	headerText: {
		color: "black",
		fontWeight: 600,
		position: "relative",
		marginBottom: "20px",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "-5px",
			width: "10%",
			border: "2px solid rgba(246,194,73, 1)",
		},
	},

	headerTextModal: {
		"&::before": {
			width: "100%",
		},
	},
	description: {
		maxWidth: "90%",
		fontSize: "18px",
		lineHeight: "24px",
	},
	rating: {
		margin: "10px",
	},
	reviewRating: {
		maxWidth: "100%",
		fontSize: "18px",
		lineHeight: "24px",
	},
	selectCategory: {},
	label: {
		maxWidth: "100%",
		fontSize: "18px",
		lineHeight: "24px",
		margin: "10px 0",
	},
	textarea: {
		fontSize: "18px",
	},
	button: {
		marginTop: "20px",
		borderRadius: "20px",
		fontSize: "20px",
		background: "rgba(246,194,73, 1)",
		color: "black",
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
	imgWrapper: {
		maxWidth: "555px",
		display: "flex",
		justifyContent: "flex-start",
		position: "relative",
	},
	img: {
		borderRadius: "20px",
		paddingRight: 0,

		maxWidth: "100%",
		maxHeight: "400px",
		objectFit: "cover",
		display: "block",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 999,

		[theme.breakpoints.down("md")]: {},
	},
	modalComponent: {
		width: "40%",
		background: "#f5f5f5",
		position: "relative",
		padding: "50px 30px",
		borderRadius: "20px",
		outline: "none",
		border: "none",

		[theme.breakpoints.down("md")]: {
			width: "calc(100% - 40px)",
			padding: "50px 20px",
		},
	},
	icon: {
		top: "10px",
		right: "10px",
		position: "absolute",
		fontSize: "30px",

		"&:hover": {
			color: "rgba(246,194,73, 1)",
		},
	},
	buttonGroup: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	secondButtonModal: {
		marginLeft: "20px",
		[theme.breakpoints.down("md")]: {
			marginLeft: "0px",
		},
	},
	error: {
		marginTop: "20px",
		color: "red",
	},
}));
