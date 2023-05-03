import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  singleProduct: {},
  productComponent: {
    color: "black",
    background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
    [theme.breakpoints.down("md")]: {},
  },
  product: {
    padding: "50px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0",
      background: "none",
    },
  },
  breadcrumbs: {
    display: "flex",
    flexDirection: "row",
    fontSize: "20px",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },

    "& a": {
      color: "black",
      textTransform: "uppercase",
      paddingRight: "10px",

      "&:hover": {
        color: "rgba(246,194,73, 1)",
      },
    },

    "& p": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  body: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  productImg: {
    position: "relative",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "middle",
    borderRadius: "20px",
    border: "3px solid rgba(246,194,73, 1)",
    transition: "all .2s ease-in-out",

    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  content: {
    width: "50%",
    marginLeft: "40px",

    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "0px",
      marginTop: "20px",
    },
  },
  header: {
    display: "flex",
    justifyContent: "initial",
    flexDirection: "column",
  },
  headerText: {
    color: "#191919",
    fontWeight: 600,
    position: "relative",
    textTransform: "uppercase",
    marginBottom: "20px",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      width: "30%",
      border: "2px solid rgba(246,194,73, 1)",
    },
  },
  price: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "rgba(246,194,73, 1)",
    overflow: "hidden",
    display: "block",

    [theme.breakpoints.down("md")]: {
      fontSize: "26px",
    },
  },
  phone: {
    marginTop: "20px",
    fontSize: "18px",

    "& a": {
      color: "rgba(246,194,73, 1)",
      cursor: "pointer",
    },
  },
  listProduct: {
    display: "flex",
    flexWrap: "wrap",
  },
  specialProduct: {
    background: "transparent",
    boxShadow: "2px 14px 12px -9px rgba(0,0,0,0.75)",
    margin: "0 15px 30px",
    minHeight: "145px",
    flex: "0 0 calc(33.333% - 30px)",
    overflow: "hidden",

    transition: "all .2s ease-in-out",

    "&:hover": {
      transform: "scale(1.05)",
    },

    [theme.breakpoints.down("md")]: {
      flex: "0 0 calc(50% - 30px)",
    },
  },
  productImage: {
    position: "relative",
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

  contentProduct: {
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
  buttonProduct: {
    maxWidth: "190px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  imgSpecial: {
    border: "none",
    borderRadius: "10px 10px 0 0",
  },
  headerRecentPosts: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    borderTop: "2px solid rgba(246,194,73, 1)",
    paddingTop: "50px",
  },
  headerRecentPostsText: {
    color: "black",
    fontWeight: 600,
    position: "relative",
    textTransform: "uppercase",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      width: "100%",
      border: "2px solid rgba(246,194,73, 1)",
    },
  },
  blockContent: {
    marginTop: "20px",
    padding: "20px 0",
    width: "100%",

    "& h1": {
      fontSize: "60px",
    },

    "& h2": {
      fontSize: "40px",
    },

    "& h3": {
      fontSize: "25px",
    },
    "& h4": {
      fontSize: "17.5px",
    },

    "& p": {
      fontSize: "20px",
    },

    "& figure": {
      display: "flex",
      justifyContent: "center",
      margin: "20px 0",
    },

    "& img": {
      transition: "all .2s ease-in-out",
      width: "100%",
      maxWidth: "600px",
      borderRadius: "10px",
      boxShadow: "2px 14px 12px -9px rgba(0,0,0,0.75)",

      "&:hover": {
        transform: "scale(1.03)",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
        verticalAlign: "middle",
      },
    },
  },
}));
