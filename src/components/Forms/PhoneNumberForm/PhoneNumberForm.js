import CloseIcon from '@mui/icons-material/Close';
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import mockJson from "../../../mock.json";
import classes from "./phonenumberform.module.css";

const PhoneNumberForm = ({ setPhoneNumber, setShowOtpForm, setshowSignUpForm, onClose, phoneNumber }) => {
	const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
	const [helperText, setHelperText] = useState("");
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		console.log(mockJson);
		validatePhoneNumber(phoneNumber);
	}, [phoneNumber])

	const onChangeHandler = (event) => {
		let value = event.target.value.trim();
		setPhoneNumber(value);
		validatePhoneNumber(value);
	}

	const validatePhoneNumber = (phoneNumber) => {
		if (phoneNumber.length === 10) {
			setHelperText("");
			setIsPhoneNumberValid(true);
			setIsError(false);
		} else if (phoneNumber.length > 10) {
			setIsPhoneNumberValid(false);
			setIsError(true);
			setHelperText("Please enter valid 10 digit phone number");
		} else {
			setHelperText("");
			setIsPhoneNumberValid(false);
			setIsError(false);
		}
	}

	const generateOTP = () => {
		let OTP = mockJson.login[phoneNumber] ?? '';

		if (OTP) {
			window.sessionStorage.setItem("OTP", OTP)
		}
	}

	const onSubmitFormHandler = () => {
		generateOTP();
		setShowOtpForm(true);
	}

	return (
		<>
			<div className={classes['modal-header']}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					<span><CloseIcon fontSize="medium" sx={{ marginBottom: '3px', mr: 2 }} onClick={onClose} /></span>
					Please login to continue
				</Typography>
			</div>
			<div className={classes['modal-content']}>
				<TextField
					fullWidth
					size="normal"
					type="number"
					InputProps={{
						startAdornment: <InputAdornment position="start">+91</InputAdornment>,
						length: "10"
					}}
					error={isError}
					helperText={helperText}
					label="Phone Number"
					variant="outlined"
					onChange={onChangeHandler}
					value={phoneNumber}
				/>
			</div>
			<div className={classes['modal-primary-btn']}>
				<Button fullWidth size="large" disabled={!isPhoneNumberValid} variant="contained" onClick={onSubmitFormHandler}>Continue</Button>
			</div>
		</>
	);
}

export default PhoneNumberForm;