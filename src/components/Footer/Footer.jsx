import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <NavLink to="/" className={classes.footer__logo}>
            <img
              src={logoImg}
              alt="logoImg"
              className={classes.footer__logoImg}
            />
          </NavLink>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              Noor Coffee & Tea @ 2021.
            </div>
            <div className={classes.footer__centerText}>
              Made with ♥ by:{" "}
              <a
                href="http://tinspham.info/"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerTins}
              >
                Tins
              </a>
            </div>
          </div>
          <div className={classes.footer__right}>
            <a
              className={classes.footer__rightLink}
              href="https://facebook.com/noorcoffeedn"
              target="__blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={classes.footer__rightLink}
              href="https://instagram.com/noorcoffeedn"
              target="__blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
