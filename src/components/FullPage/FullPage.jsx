import { Container, Typography } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./FullPage.elements";
import { BiMouse } from "react-icons/bi";
import { useSelector } from "react-redux";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { scroller } from "react-scroll";

const FullPage = () => {
	const classes = useStyles();

	const slides = useSelector((state) => state.api.hero);
	const [current, setCurrent] = useState(0);
	const length = slides ? slides.length : null;
	const timeout = useRef(null);

	useEffect(() => {
		const nextSlide = () => {
			setCurrent(current === length - 1 ? 0 : current + 1);
		};
		timeout.current = setTimeout(nextSlide, 3000);

		return function () {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	const nextSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}

		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	const scrollToNextSection = () => {
		scroller.scrollTo("infoSection", { smooth: true, duration: 1000 });
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<>
			{slides ? (
				<section className={classes.hero}>
					<div className={classes.heroWrapper}>
						{slides.map((slide, index) => {
							return (
								<div className={classes.heroSlide} key={index}>
									{index === current && (
										<div className={classes.heroSlider}>
											<img
												src={slide.mainImage.asset.url}
												alt={slide.mainImage.asset.alt}
												className={classes.heroImage}
											/>
											<Container maxWidth="lg">
												<div className={classes.heroContent}>
													<Typography className={classes.heroContentTitle}>
														{slide.title}
													</Typography>
													<Typography className={classes.heroContentSubTitle}>
														{slide.subTitle}
													</Typography>
												</div>
											</Container>
										</div>
									)}
								</div>
							);
						})}
						<div className={classes.footer}>
							<div className={classes.fixedScrollDown}>
								<Typography variant="h6" className={classes.typo}>
									KÉO XUỐNG
								</Typography>
								<div className={classes.icon} onClick={scrollToNextSection}>
									<BiMouse />
								</div>
							</div>
							<div className={classes.sliderButton}>
								<span className={classes.arrowButtons} onClick={prevSlide}>
									{" "}
									<IoMdArrowBack />
								</span>
								<span className={classes.arrowButtons} onClick={nextSlide}>
									{" "}
									<IoMdArrowForward />
								</span>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section className={classes.slider}>
					<Container maxWidth="lg">
						<div className={classes.infoSection}>
							<div className={classes.fixedScrollDown}>
								<Typography variant="h6" className={classes.typo}>
									KÉO XUỐNG
								</Typography>
								<div className={classes.icon}>
									<BiMouse />
								</div>
							</div>
							<div className={classes.content}>
								<Typography variant="h1" className={classes.heading}>
									NOOR
								</Typography>
								<Typography variant="h4">Coffee & Tea</Typography>
							</div>
						</div>
					</Container>
				</section>
			)}
		</>
	);
};

export default FullPage;
