import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useStyles } from "./Navbar.elements";

import logoImg from "../../assets/img/logoMain.png";
import { AppBar, Container } from "@material-ui/core";

const Navbar = () => {
	const classes = useStyles();
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className={classes.nav}>
					<AppBar position="fixed" style={{ background: "#191919" }}>
						<Container maxWidth="lg">
							<div className={classes.appBar}>
								<NavLink to="/" className={classes.nav__logo}>
									<img
										src={logoImg}
										alt="logoImg"
										className={classes.nav__logoImg}
										onClick={closeMobileMenu}
									/>
								</NavLink>
								<div className={classes.nav__mobileIcon} onClick={handleClick}>
									{click ? <FaTimes /> : <FaBars />}
								</div>
								<ul
									className={classes.nav__menu}
									onClick={handleClick}
									style={{ left: `${click ? 0 : "-100%"}` }}
								>
									<li className={classes.nav__item}>
										<NavLink to="/" className={classes.nav__link}>
											Trang Chủ
										</NavLink>
									</li>
									<li className={classes.nav__item}>
										<NavLink
											to="/products"
											className={classes.nav__link}
											activeClassName={classes.activeClass}
										>
											Sản phẩm
										</NavLink>
									</li>
									<li className={classes.nav__item}>
										<NavLink
											to="/blog"
											className={classes.nav__link}
											activeClassName={classes.activeClass}
										>
											Tin tức
										</NavLink>
									</li>
									<li className={classes.nav__item}>
										<NavLink
											to="/stores"
											className={classes.nav__link}
											activeClassName={classes.activeClass}
										>
											Cửa hàng
										</NavLink>
									</li>
									<li className={classes.nav__item}>
										<NavLink
											to="/membership"
											className={classes.nav__link}
											activeClassName={classes.activeClass}
										>
											Thành viên
										</NavLink>
									</li>
									<li className={classes.nav__item}>
										<NavLink
											to="/about"
											className={classes.nav__link}
											activeClassName={classes.activeClass}
										>
											Về chúng tôi
										</NavLink>
									</li>
								</ul>
							</div>
						</Container>
					</AppBar>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
