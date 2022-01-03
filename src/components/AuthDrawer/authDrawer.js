import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import OTPForm from '../Forms/OTPForm/OTPForm';
import PhoneNumberForm from '../Forms/PhoneNumberForm/PhoneNumberForm';

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

	return (
		<div>
			<Modal
				open={openAuthDrawer}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{showOtpForm ? <OTPForm phoneNumber={phoneNumber} setShowOtpForm={setShowOtpForm} closeAuthDrawer={onClose} /> :
						<PhoneNumberForm setPhoneNumber={setPhoneNumber} setShowOtpForm={setShowOtpForm} onClose={onClose} phoneNumber={phoneNumber} />}
				</Box>
			</Modal>
		</div >
	);

}

export default AuthDrawer;