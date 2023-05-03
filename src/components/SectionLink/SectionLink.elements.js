import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	section: {
		padding: "80px 0",
	},
	spinner: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	infoRow: {
		alignItems: "center",

		display: "flex",
		flexDirection: "row-reverse",
		flexWrap: "wrap",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
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
		paddingRight: 0,

		maxWidth: "100%",
		maxHeight: "400px",
		objectFit: "cover",
		display: "block",
	},

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
	subHeader: {
		fontSize: "18px",
	},
	header: {
		fontWeight: 600,
		position: "relative",
		textTransform: "uppercase",

		"&::before": {
			content: '""',
			position: "absolute",
			bottom: "-5px",
			width: "20%",
			border: "2px solid rgba(246,194,73, 1)",
		},
	},
	description: {
		fontSize: "18px",
	},
	icon: {
		marginRight: "10px",
	},
	linkBtn: {},
}));
