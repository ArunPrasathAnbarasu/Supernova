import React from "react";
import {useState,useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {  Button,InputAdornment, TextField,Typography } from "@mui/material";
import classes from './signupform.module.css';

const Signupform = ({onClose}) => {

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const [Err,setErr] = useState({
        nameErr: false,
        nameErrTxt: '',
        phoneErr: false,
        phoneErrTxt: ''
    })

    useEffect(() => {		
        validateValues(values);
	}, [values])

    const onNameChange = (event) => {
        //event.persist();
        setValues((values)=>({
            ...values,
            name: event.target.value
        }))
    }

    const onNumChange = (event) => {
        //event.persist();
        setValues((values)=>({
            ...values,
            phone: event.target.value
        }))
    }

    const validateValues = (val) => {
        if(val.name.length === 0){
            setErr((Err)=>({
                ...Err,
                nameErr: true,
                nameErrTxt: 'Please enter a name'
            }))
        }else {
            setErr((Err)=>({
                ...Err,
                nameErr: false,
                nameErrTxt: ''
            }))      
        }

        if(val.phone.length > 10 || val.phone.length < 1){
            setErr((Err)=>({
                ...Err,
                phoneErr: true,
                phoneErrTxt: 'Please enter valid 10 digit phone number'
            }))
        }else {
            setErr((Err)=>({
                ...Err,
                phoneErr: false,
                phoneErrTxt: ''
            }))
        }
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        
    }

    return(
        <React.Fragment>
            <div>
            <div className={classes['modal-header']}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					<span><CloseIcon fontSize="medium" sx={{ marginBottom: '3px', mr: 2 }} onClick={onClose} className={classes['close-icon']}/></span>
					SignUp here !
				</Typography>
			</div>
            <form onSubmit={onSubmitFormHandler}>
            <div className={classes['modal-content']}>
				<TextField
					fullWidth
					size="normal"
					error={Err.nameErr}
					helperText={Err.nameErrTxt}
					label="Full Name"
					variant="outlined"
					onChange={onNameChange}
					value={values.name}
				/>
			</div>
            <div className={classes['modal-content']}>
				<TextField
					fullWidth
					size="normal"
                    type='number'
					InputProps={{
						startAdornment: <InputAdornment position="start">+91</InputAdornment>,
						length: "10"
					}}
					error={Err.phoneErr}
					helperText={Err.phoneErrTxt}
					label="Phone Number"
					variant="outlined"
					onChange={onNumChange}
					value={values.phone}
				/>
			</div>
            <div className={classes['modal-primary-btn']}>
				<Button fullWidth size="large" disabled={Err.nameErr || Err.phoneErr} variant="contained" type="submit">Continue</Button>
			</div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default Signupform;