import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
	productsList: {
		color: "black",
		padding: "80px 0",
		background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
		[theme.breakpoints.down("md")]: {},
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	headerText: {
		color: "#191919",
		fontWeight: 600,
		position: "relative",
		textTransform: "uppercase",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "-2px",
			width: "50%",
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

	buttonProduct: {
		maxWidth: "190px",
		[theme.breakpoints.down("md")]: {
			fontSize: "12px",
		},
	},

	flexBox: {
		display: "flex",
		flexDirection: "row",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	sidebar: {
		width: "20%",

		padding: "0 15px",

		[theme.breakpoints.down("md")]: {
			width: "100%",
			padding: "0",
		},
	},
	sidebarMenu: {
		background: "#fff",

		position: "sticky",
		top: "90px",
		left: "0px",

		minHeight: "1px",

		"& ul li": {
			padding: "12px 30px",
		},

		[theme.breakpoints.down("md")]: {
			position: "static",
			marginBottom: "30px",

			"& ul": {
				display: "flex",
				overflowX: "scroll",
				whiteSpace: "nowrap",
				flexWrap: "no-wrap",
				WebkitOverflowScrolling: "auto",
			},
		},
	},
	sidebarItem: {
		fontSize: "20px",
		fontWeight: "700",
		textTransform: "uppercase",
		cursor: "pointer",
		userSelect: "none",

		"&:hover": {
			color: "rgba(246,194,73, 0.9)",
		},

		[theme.breakpoints.down("md")]: {
			fontSize: "17px",
		},
	},
	products: {
		width: "80%",
		borderLeft: "2px solid rgba(246,194,73, 0.9)",
		paddingLeft: "15px",

		[theme.breakpoints.down("md")]: {
			width: "100%",
			border: "none",
			paddingLeft: "0",
		},
	},
	category: {
		marginBottom: "20px",
		"&:last-child": {
			marginBottom: 0,
		},
	},

	listProduct: {
		marginTop: "50px",
		display: "flex",
		flexWrap: "wrap",
	},
	product: {
		background: "transparent",
		margin: "0 15px 30px",
		minHeight: "145px",
		flex: "0 0 calc(33.333% - 30px)",
		overflow: "hidden",

		[theme.breakpoints.down("md")]: {
			flex: "0 0 calc(50% - 30px)",
		},

		transition: "all .2s ease-in-out",

		"&:hover": {
			transform: "scale(1.05)",
		},
	},
	productImage: {
		position: "relative",
	},
	img: {
		width: "100%",
		border: "none",
		maxWidth: "100%",
		height: "auto",
		verticalAlign: "middle",
		borderRadius: "10px 10px 0 0",
	},

	trendLabel: {
		content: '""',
		color: "white",
		backgroundColor: "#ec8b38",

		padding: "0 7px",
		borderLeft: "1px solid black",
		borderTop: "1px solid black",
		borderBottom: "1px solid black",

		fontSize: "18px",
		fontWeight: "700",
		lineHeight: "35px",

		textAlign: "center",
		textTransform: "uppercase",

		position: "absolute",
		bottom: "12px",
		right: "0px",
		zIndex: "9",

		[theme.breakpoints.down("md")]: {
			fontSize: "9px",
			lineHeight: "20px",
		},
	},

	newLabel: {
		content: '""',
		color: "white",
		backgroundColor: "#ee5375",

		padding: "0 7px",
		borderRight: "1px solid black",
		borderTop: "1px solid black",
		borderBottom: "1px solid black",

		fontSize: "18px",
		fontWeight: "700",
		lineHeight: "35px",

		textAlign: "center",
		textTransform: "uppercase",

		position: "absolute",
		top: "12px",
		left: "0px",
		zIndex: "9",

		[theme.breakpoints.down("md")]: {
			fontSize: "9px",
			lineHeight: "20px",
		},
	},

	content: {
		padding: "12px",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		background: "#fff",
		borderRadius: "0 0 10px 10px",
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

		[theme.breakpoints.down("md")]: {
			fontSize: "16px",
		},
	},
	price: {
		margin: "10px 0",
		fontSize: "32px",
		color: "rgba(246,194,73, 1)",
		overflow: "hidden",
		display: "block",

		[theme.breakpoints.down("md")]: {
			fontSize: "20px",
		},
	},
}));
