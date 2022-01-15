import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import OTPForm from '../Forms/OTPForm/OTPForm';
import PhoneNumberForm from '../Forms/PhoneNumberForm/PhoneNumberForm';
import classes from './authdrawer.module.css';
import Signupform from '../Forms/SignUpForm/SignUpForm';

// Default style for the box
const style = {
	position: 'absolute',
	right: 0,
	width: 350,
	height: '100%',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const AuthDrawer = ({ openAuthDrawer, onClose }) => {
	// State which holds phone number
	const [phoneNumber, setPhoneNumber] = useState("");

	// State which displays/hides the OTP Form
	const [showOtpForm, setShowOtpForm] = useState(false);

	// State which displays/hides the number Form
	const [showPhoneForm, setshowPhoneForm] = useState(true);

	// state which displays/hide the signup Form
	const [showSignUpForm, setshowSignUpForm] = useState(false);

	const handleSignupLink = () =>{
		setshowSignUpForm(true);
		setshowPhoneForm(false)
	}

	return (
		<div>
			<Modal
				open={openAuthDrawer}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{showOtpForm ? <OTPForm phoneNumber={phoneNumber} setShowOtpForm={setShowOtpForm} closeAuthDrawer={onClose} /> : showPhoneForm ?
						<><PhoneNumberForm setPhoneNumber={setPhoneNumber} setShowOtpForm={setShowOtpForm} setshowSignUpForm={setshowSignUpForm} onClose={onClose} phoneNumber={phoneNumber} />
							<div className={classes['signup']}>
								<span>
									Not Registered ? <span className={classes['edit-link']} onClick={handleSignupLink}>Register here</span>
								</span>
							</div>
						</>: <></>
					}
					{showSignUpForm && !showOtpForm ? <Signupform onClose={onClose}></Signupform> : <></>}
				</Box>



			</Modal>
		</div >
	);

}

export default AuthDrawer;