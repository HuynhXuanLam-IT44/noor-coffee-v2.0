import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
	Container,
	Typography,
	TextField,
	Select,
	MenuItem,
	Button,
	Modal,
} from "@material-ui/core";
import { useStyles } from "./Membership.elements";
import { IoCloseCircleOutline } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { firebaseInit } from "../../firebase";
import { getUUID } from "../../utils";

import membershipImg from "../../assets/img/membership.svg";
import { SpinnerBook } from "../../components";

const Membership = () => {
	const classes = useStyles();
	const [spinner, setSpinner] = useState(true);
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [sex, setSex] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	// eslint-disable-next-line
	const [error, setError] = useState("");
	const [disabledButton, setDisabledButton] = useState(true);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	useEffect(() => {
		if ((name !== "") & (dob !== "") & (sex !== "") & (phoneNumber !== "")) {
			setDisabledButton(false);
		}
	}, [name, dob, sex, phoneNumber, disabledButton]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setTimeout(() => {
			setModal(true);
		}, 500);

		firebaseInit
			.firestore()
			.collection("members")
			.add({
				id: getUUID(),
				dateCreate: new Date(),
				phoneNumber: phoneNumber,
				name: name,
				emailAddress: email,
				dob: dob,
				sex: sex,
			})
			.then()
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	const handleFeedbackContinueButton = () => {
		setModal(false);
		setDisabledButton(true);
		setName("");
		setDob("");
		setSex("");
		setPhoneNumber("");
		setEmail("");
	};

	return (
		<div className={classes.membership}>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<Modal
						open={modal}
						onClose={() => {
							setModal(false);
							setDisabledButton(true);
							setName("");
							setDob("");
							setSex("");
							setPhoneNumber("");
							setEmail("");
						}}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						className={classes.modal}
					>
						<Container maxWidth="lg" className={classes.modalComponent}>
							<span className={classes.icon} onClick={() => setModal(false)}>
								<IoCloseCircleOutline />
							</span>
							<Typography
								variant="h4"
								className={`${classes.headerText} ${classes.headerTextModal}`}
							>
								NOOR Coffee & Tea
							</Typography>
							<p className={classes.description}>
								Đăng ký thành viên thành công. Cảm ơn bạn!
							</p>
							<div className={classes.buttonGroup}>
								<Link to="/">
									<Button variant="contained" className={classes.button}>
										Đến trang chủ
									</Button>
								</Link>
								<Button
									variant="contained"
									className={`${classes.button} ${classes.secondButtonModal}`}
									onClick={handleFeedbackContinueButton}
								>
									Tiếp tục đăng ký
								</Button>
							</div>
						</Container>
					</Modal>
					<Container maxWidth="lg" className={classes.container}>
						<div className={classes.row}>
							<div className={classes.column}>
								<div className={classes.textWrapper}>
									<Typography variant="h4" className={classes.headerText}>
										Đăng ký thành viên
									</Typography>
									<p className={classes.description}>
										Hãy chia sẻ thông tin với chúng tôi, nhiều ưu đãi hấp dẫn
										đang chờ đón bạn.
									</p>
									<p id="category" className={classes.label}>
										Họ và tên: (*)
									</p>
									<TextField
										id="outlined-basic1"
										variant="outlined"
										placeholder={name}
										onChange={(event) => setName(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										Ngày sinh: (*)
									</p>
									<TextField
										id="outlined-basic2"
										variant="outlined"
										placeholder={dob}
										type="date"
										onChange={(event) => setDob(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										Giới tính: (*)
									</p>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper3"
										value={sex}
										onChange={(event) => setSex(event.target.value)}
										className={classes.selectCategory}
										variant="outlined"
									>
										<MenuItem value="Nam">Nam</MenuItem>
										<MenuItem value="Nữ">Nữ</MenuItem>
										<MenuItem value="Giới tính khác">Giới tính khác</MenuItem>
									</Select>
									<p id="category" className={classes.label}>
										Email: (*)
									</p>
									<TextField
										id="outlined-basic3"
										variant="outlined"
										placeholder={email}
										type="email"
										onChange={(event) => setEmail(event.target.value)}
									/>
									<p id="category" className={classes.label}>
										Số điện thoại: (*)
									</p>
									<TextField
										id="outlined-basic4"
										variant="outlined"
										placeholder={phoneNumber}
										onChange={(event) => setPhoneNumber(event.target.value)}
									/>
									<Button
										variant="contained"
										className={classes.button}
										onClick={handleSubmit}
										disabled={disabledButton ? true : false}
									>
										Đăng ký
									</Button>
									{error && (
										<p className={`${classes.label} ${classes.error}`}>
											Lỗi: Vui lòng nhập nội dung ở mục: {error}
										</p>
									)}
								</div>
							</div>
							<div className={classes.column}>
								<div className={classes.imgWrapper}>
									<LazyLoadImage
										src={membershipImg}
										alt="img"
										className={classes.img}
										effect="blur"
									/>
								</div>
							</div>
						</div>
					</Container>
				</>
			)}
		</div>
	);
};

export default Membership;
