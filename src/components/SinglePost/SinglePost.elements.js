import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../assets/img/bg-white.webp";

export const useStyles = makeStyles((theme) => ({
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postComponent: {
    color: "black",
    background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
    [theme.breakpoints.down("md")]: {},
  },
  post: {
    background: "white",
    padding: "50px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0",
      background: "none",
    },
  },
  breadcrumbs: {
    display: "flex",
    flexDirection: "row",
    fontSize: "24px",

    "& a": {
      color: "black",

      "&:hover": {
        color: "rgba(246,194,73, 1)",
      },
    },

    "& p": {
      paddingLeft: "5px",
      fontWeight: "bold",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: "20px",
  },
  headerText: {
    color: "black",
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
  authorDate: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  author: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authorImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  authorName: {
    marginLeft: "10px",
    fontSize: "17px",
    color: "black",
    cursor: "pointer",

    "&:hover": {
      color: "rgba(246,194,73, 1)",
    },
  },
  date: {
    marginTop: "20px",
    fontSize: "17px",
  },
  blockContent: {
    marginTop: "20px",
    padding: "20px 0",
    borderTop: "2px solid rgba(246,194,73, 1)",
    borderBottom: "2px solid rgba(246,194,73, 1)",
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
  headerRecentPosts: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
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
  recentPosts: {
    color: "black",
    background: `url(${bgImg}) no-repeat right top, #f5f5f5`,
    padding: "50px 0",
    [theme.breakpoints.down("md")]: {},
  },

  postsPreview: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "row",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  postPreview: {
    margin: "0 15px 30px",
    background: "#fff 50%",
    boxShadow: "2px 14px 12px -9px rgba(0,0,0,0.75)",

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
  footer: {
    display: "flex",
    justifyContent: "space-between",
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
}));
