import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	hero: {
		height: "calc(100vh - 80px)",
		position: "relative",
		overflow: "hidden",
		backgroundColor: "#cab9a9",

		[theme.breakpoints.down("md")]: {
			height: "calc(100vh - 80px - 60px)",
		},
	},

	heroWrapper: {
		width: "100%",
		height: "100%",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		overflow: "hidden",
		position: "relative",
	},

	heroSlide: {
		zIndex: "9",
		width: "100%",
		height: "100%",

		transition: "all 1 ease-in-out",
	},
	heroSlider: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"&::before": {
			content: '""',
			position: "absolute",
			zIndex: "10",
			width: "100%",
			height: "100vh",
			bottom: "0vh",
			overFlow: "hidden",
			opacity: "0.7",
			background:
				"linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%)",
		},
	},
	heroImage: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		objectFit: "cover",
	},
	heroContent: {
		position: "relative",
		zIndex: "10",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		color: "#fff",
	},
	heroContentTitle: {
		fontSize: "clamp(7.3rem, 20vw, 20rem)",
		textShadow: "-8px 7px rgba(0,0,0,0.7)",
		fontWeight: "500",
		textTransform: "uppercase",
		fontFamily: '"BebasNeue","Lato", san-serif',
	},
	heroContentSubTitle: {
		fontSize: "56px",
		textTransform: "uppercase",
		fontFamily: '"BebasNeue","Lato", san-serif',
		letterSpacing: "10px",

		[theme.breakpoints.down("md")]: {
			fontSize: "32px",
			letterSpacing: "3px",
		},
	},
	sliderButton: {
		position: "absolute",
		bottom: "50px",
		right: "50px",
		display: "flex",
		zIndex: "99",

		[theme.breakpoints.down("md")]: {
			bottom: "10%",
			right: "2%",
		},
	},
	arrowButtons: {
		width: "50px",
		height: "50px",

		color: "black",
		backgroundColor: "#f5f5f5",
		borderRadius: "50px",
		border: "none",
		outline: "none",

		cursor: "pointer",

		padding: "10px",
		marginRight: "10px",
		userSelect: "none",
		transition: "all 0.2s ease-in-out",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"&:hover": {
			background: "rgba(246,194,73, 1)",
			transform: "scale(1.05)",
		},
		"& svg": {
			fontSize: "24px",
		},
	},

	slider: {
		width: "100%",
		height: "calc( 100vh - 80px)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#cab9a9",

		[theme.breakpoints.down("md")]: {},
	},

	fixedScrollDown: {
		position: "absolute",
		bottom: "1%",
		left: "50%",
		zIndex: "99",

		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",

		color: "white",

		[theme.breakpoints.down("md")]: {
			bottom: "10%",
			left: "35%",
		},
	},
	icon: {
		fontSize: "40px",
		animation: `$pulse 2s infinite`,
		WebkitAnimation: `$pulse 2s infinite`,
	},
	typo: {
		"&::before": {
			content: '""',
			position: "absolute",
			top: "28px",
			width: "100%",
			border: "2px solid white",
		},
	},

	infoSection: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: "10px",
		color: "white",

		padding: "20px 10px",
	},

	heading: {
		fontSize: "200px",
		textShadow: "-10px 8px #000",
		fontWeight: "500",

		[theme.breakpoints.down("md")]: {
			fontSize: "120px",
		},
	},

	"@keyframes pulse": {
		"0%": {
			webkitTransform: "translate(0, 0)",
			transform: "translate(0, 0)",
		},
		"50%": {
			webkitTransform: "translate(0, 10px)",
			transform: "translate(0, 10px)",
		},
		"100%": {
			webkitTransform: "translate(0, 0)",
			transform: "translate(0, 0)",
		},
	},
}));
