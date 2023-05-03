import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import Maps from "./Maps/Maps";

const InfoMaps = () => {
	const classes = useStyles();
	return (
		<div className={classes.info}>
			<Container maxWidth="lg">
				<div className={classes.infoRow}>
					<div className={classes.infoColumn}>
						<div className={classes.textWrapper}>
							<Typography variant="h4" className={classes.text}>
								CỬA HÀNG
							</Typography>
							<div>
								<Typography variant="h6" className={classes.subTitle}>
									Địa chỉ: 30 Phan Thúc Duyện, Ngũ Hành Sơn, Đà Nẵng, Vietnam
								</Typography>
								<Typography variant="h6" className={classes.subTitle}>
									Số điện thoại: 0932.535.175
								</Typography>
								<Typography variant="h6" className={classes.subTitle}>
									Email: noorcoffeedn@gmail.com
								</Typography>
							</div>
							<a
								href="https://g.page/noorcoffeedn?share"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="contained" className={classes.button}>
									<SiGooglemaps /> Get Directions
								</Button>
							</a>
						</div>
					</div>
					<div className={classes.infoColumn}>
						<div className={classes.imgWrapper}>
							<Maps />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default InfoMaps;
