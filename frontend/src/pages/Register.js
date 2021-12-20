import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Button, Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';
import { connect } from 'react-redux';
import { AuthActions } from '../stores/actions';


function Register(props) {
    const { signUp } = props;
    const [open, setOpen] = React.useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')

    const signUpButton = async () => {
        signUp(firstName, lastName, dob, gender, address, number, email, password)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    const handleDobChange = (e) => {
        setDob(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <ContentElement>
                <div>
                    <h3>We are very happy to welcome you as a new part of the PSOAStore family.</h3>
                    <br />
                    <p> Please enter your data in the fields below. </p>
                    <br />
                    <br />
                    <br />
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                        }
                    >
                        {/* Personal data */}
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Personal data" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <br />
                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            defaultValue=''
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <p> Fill in your first & lastname: </p>
                                    <br />
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Firstname"
                                            defaultValue=''
                                            onChange={handleFirstNameChange}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Lastname"
                                            defaultValue=''
                                            onChange={handleLastNameChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                {/* Select gender */}
                                <FormControl component="fieldset">
                                    <p> Select your gender: </p>
                                    <FormLabel component="legend"></FormLabel>
                                    <RadioGroup
                                        required
                                        aria-label="gender"
                                        defaultValue="none"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="F" onChange={handleGenderChange} control={<Radio />} label="Female" />
                                        <FormControlLabel value="M" onChange={handleGenderChange} control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <br />
                                <br />
                                {/* Select age */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <p> Fill in your date of birth: </p>
                                    <br />
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="DD/MM/YYYY"
                                            defaultValue=''
                                            onChange={handleDobChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <p> Fill in your adress: </p>
                                    <br />
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Streetname and housenumber"
                                            defaultValue=''
                                            onChange={handleAddressChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                {/* Phonenumber */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <p> Fill in your phone number: </p>
                                    <br />
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="please use international area code"
                                            defaultValue=''
                                            onChange={handleNumberChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                            </List>
                        </Collapse>
                    </List>
                </div>
                <div>
                    <RegisterButton >
                        <Button sx={{ color: "green" }} onClick={signUpButton}>Sign up</Button>
                    </RegisterButton>
                    <br/>
                    <RegisterButton >
                        <RegisterButtonLink to='/login' sx={{ color: "green" }} >Back to login</RegisterButtonLink>
                    </RegisterButton>
                </div>
            </ContentElement>
        </Container>
    );
}

const mapDispatchToProps = {
    signUp: AuthActions.signUp,

}

export default connect(null, mapDispatchToProps)(Register);



