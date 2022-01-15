import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import {  InputAdornment, TextField,Typography } from "@mui/material";
import classes from './signupform.module.css';

const Signupform = ({onClose}) => {
    return(
        <React.Fragment>
            <div>
            <div className={classes['modal-header']}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					<span><CloseIcon fontSize="medium" sx={{ marginBottom: '3px', mr: 2 }} onClick={onClose} className={classes['close-icon']}/></span>
					SignUp here !
				</Typography>
			</div>
            {/* <div className={classes['modal-content']}>
				<TextField
					fullWidth
					size="normal"
					InputProps={{
						startAdornment: <InputAdornment position="start">+91</InputAdornment>,
						length: "10"
					}}
					error={isError}
					helperText={helperText}
					label="Full Name"
					variant="outlined"
					onChange={onChangeHandler}
					value={phoneNumber}
				/>
			</div> */}
            </div>
        </React.Fragment>
    );
}

export default Signupform;