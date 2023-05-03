import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";
export const useStyles = makeStyles((theme) => ({
	info: {
		color: "black",
		padding: "80px 0",
		background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	infoRow: {
		alignItems: "center",

		display: "flex",
		flexWrap: "wrap",
	},

	infoColumn: {
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

	imgWrapper: {
		maxWidth: "555px",
		display: "flex",
		justifyContent: "flex-start",
		position: "relative",
	},

	img: {
		borderRadius: "20px",
		borderBottomLeftRadius: "0",
		paddingRight: 0,
		border: 0,

		maxWidth: "100%",
		maxHeight: "400px",
		objectFit: "cover",
		display: "block",
	},

	imgAbout: {
		position: "absolute",
		bottom: "-20px",
		left: 0,

		padding: "10px",
		backgroundColor: "rgba(0,0,0,0.5)",

		borderBottomRightRadius: "20px",
		MozBorderRadiusBottomright: "20px",
		WebkitBorderBottomRightRadius: "20px",

		borderTopRightRadius: "20px",
		MozBorderRadiusTopright: "20px",
		WebkitBorderTopRightRadius: "20px",

		color: "white",

		[theme.breakpoints.down("md")]: {
			"& h3": {
				fontSize: "40px",
			},
		},
	},

	textWrapper: {
		height: "auto",
		display: "grid",
		gridGap: "4rem",
		gridTemplateColumns: "repeat(1, 1fr)",

		[theme.breakpoints.down("md")]: {
			marginTop: "50px",
			gridGap: "3rem",
		},
	},
	text: {
		color: "rgba(246,194,73, 1)",
		fontWeight: 600,
	},
	subTitle: {},
	button: {
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
	blockContent: {
		"& p": {
			fontSize: "20px",
		},
	},
}));
