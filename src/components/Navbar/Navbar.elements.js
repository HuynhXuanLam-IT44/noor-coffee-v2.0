import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	nav: {
		background: "#191919",
		height: "80px",
	},

	appBar: {
		display: "flex",
		flexDirection: "row !important",
		justifyContent: "space-between",
		alignItems: "center",
		fontSize: "20px",
	},

	nav__logo: {
		height: "80px",
		color: "#fff",
		textDecoration: "none",
		fontSize: "20px",

		display: "flex",
		justifySelf: "flex-start",
		alignItems: "center",

		border: "none",
		outline: "none",

		cursor: "pointer",
	},

	nav__logoImg: {
		height: "100%",
		border: "none",
		outline: "none",

		padding: "10px",

		display: "block",
		verticalAlign: "middle",
	},

	nav__mobileIcon: {
		display: "none",

		[theme.breakpoints.down("md")]: {
			fontSize: "28px",
			display: "block",

			position: "absolute",
			top: 0,
			right: 0,

			transform: "translate(-100%, 60%)",

			cursor: "pointer",
		},
	},

	nav__menu: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		zIndex: 999,

		[theme.breakpoints.down("md")]: {
			width: "100%",
			height: "calc(100vh - 80px)",
			background: "#101522",
			display: "flex",
			flexDirection: "column",

			position: "absolute",
			top: "80px",

			opacity: 1,

			transition: "all 0.5s ease",
		},
	},

	nav__item: {
		height: "80px",
		borderBottom: "5px solid transparent",

		"&:hover": {
			borderBottom: "5px solid #4b59f7",
		},
		[theme.breakpoints.down("md")]: {
			width: "100%",
			"&:hover": {
				border: "none",
			},
		},
	},

	nav__link: {
		height: "100%",
		textDecoration: "none",
		textTransform: "uppercase",

		color: "#fff",
		padding: "5px 10px",

		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			padding: "20px",
			textAlign: "center",
			display: "table",

			"&:hover": {
				color: "#4b59f7",
				transition: "all 0.3s ease",
			},
		},
	},

	activeClass: {
		borderBottom: "5px solid #4b59f7",
		[theme.breakpoints.down("md")]: {
			borderBottom: "none",
			fontSize: "25px",
		},
	},
}));
