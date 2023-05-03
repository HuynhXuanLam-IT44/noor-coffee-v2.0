import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeroPage.elements";
import { BiMouse } from "react-icons/bi";
import { scroller } from "react-scroll";

const HeroPage = ({ slides, idScrollTo }) => {
	const classes = useStyles();

	const scrollToNextSection = () => {
		scroller.scrollTo(`${idScrollTo}`, { smooth: true, duration: 1000 });
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
									<div className={classes.heroSlider}>
										<img
											src={slide.mainImage.asset.url}
											alt={slide.mainImage.asset.alt}
											className={classes.heroImage}
										/>
										<Container maxWidth="lg">
											<div className={classes.heroContent}>
												<p className={classes.heroContentTitle}>
													{slide.title}
												</p>
												<p className={classes.heroContentSubTitle}>
													{slide.subTitle}
												</p>
											</div>
										</Container>
									</div>
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
								<Typography variant="h4">COFFEE & TEA</Typography>
							</div>
						</div>
					</Container>
				</section>
			)}
		</>
	);
};

export default HeroPage;
