import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';
import TextField from '@mui/material/TextField';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { AuthActions, ProductActions } from '../stores/actions';
import OrderCard from './OrderCard';

const Userprofile = (props) => {
    const { user, saveChanges, deleteUser, addCredits, getOrders, orders } = props;
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [dateOfBirth, setDob] = useState("");
    const [adress, setAddress] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const [Email, setEmail] = useState("");

    const [myOrders, setMyOrders] = useState([]);

    useEffect(
        () => {
            if (user) {
                setFName(user.first_name);
                setLName(user.last_name);
                setDob(user.dob);
                setAddress(user.address);
                setPhonenumber(user.phone_number);
                setEmail(user.email);

            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user]
    );

    useEffect(
        () => {
            getOrders();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useEffect(
        () => {
            if(orders !== null) setMyOrders(orders);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [orders]
    );

    const [Fname, editFName] = useState('');
    const [LName, editLName] = useState('');
    const [DateOfBirth, editDob] = useState('');
    const [Address, editAddress] = useState('');
    const [PhoneNumber, editPhonenumber] = useState('');
    const [EMail, editEmail] = useState('');
    const [Password, editPassword] = useState('');
    const [Credits, editCredits] = useState('');

    const saveChangesButton = async () => {
        saveChanges(Fname, LName, DateOfBirth, Address, PhoneNumber, EMail, Password);
    }

    const handleFNameChange = (e) => {
        editFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        editLName(e.target.value);
    }
    const handleDobChange = (e) => {
        editDob(e.target.value);
    }
    const handleAddressChange = (e) => {
        editAddress(e.target.value);
    }
    const handlePhonenumberChange = (e) => {
        editPhonenumber(e.target.value);
    }
    const handleEmailChange = (e) => {
        editEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        editPassword(e.target.value);
    }
    const handleCreditsChange = (e) => {
        editCredits(e.target.value);
    }

    const [openPD, setOpenPersonalData] = React.useState(false);
    const [openLG, setOpenLoginData] = React.useState(false);
    const [openC, setOpenCredits] = React.useState(false);
    const [openPh, setOpenProducthistory] = React.useState(false);

    const handleClickPD = () => {
        setOpenPersonalData(!openPD);
    };
    const handleClickLG = () => {
        setOpenLoginData(!openLG);
    };
    const handleClickC = () => {
        setOpenCredits(!openC);
    };
    const handleClickPh = () => {
        setOpenProducthistory(!openPh);
    };



    return (
        <Container>
            <ContentElement>
                <div>
                    <h1>Hi {fName + " " + lName}! </h1>
                    <br />
                    <h3>Here you can change your personal data.</h3>
                    <br />
                    <p> (Please keep them always up to date) </p>
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
                        <ListItemButton onClick={handleClickPD}>
                            <ListItemText primary="Personal data" />
                            {openPD ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openPD} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <br />
                                <br />
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
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
                                            defaultValue={fName}
                                            onChange={handleFNameChange}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Lastname"
                                            defaultValue={lName}
                                            onChange={handleLNameChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                {/* Select age */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
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
                                            defaultValue={dateOfBirth}
                                            onChange={handleDobChange}
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                {/* adress */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
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
                                            defaultValue={adress}
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
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
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
                                            defaultValue={phoneNumber}
                                            onChange={handlePhonenumberChange}
                                        />
                                    </div>
                                </Box>
                            </List>
                        </Collapse>
                        <br/>
                        {/* Login data */}
                        <ListItemButton onClick={handleClickLG}>
                            <ListItemText primary="Login data" />
                            {openLG ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openLG} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            defaultValue={Email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-password-input"
                                            label="New password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </Box>
                            </List>
                        </Collapse>
                        <br/>
                        {/* Credits */}
                        <ListItemButton onClick={handleClickC}>
                            <ListItemText primary="Credits" />
                            {openC ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openC} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="Your Credits"
                                            value={user.credits}
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Add credits"
                                            onChange={handleCreditsChange}
                                        />
                                    </div>
                                    <br/>
                                    <Button
                                        style={{ backgroundColor: '#006600', color: 'white' }}
                                        variant="contained"
                                        component="label"
                                        onClick={() => addCredits(Credits)}
                                    >
                                        Add credits
                                    </Button >
                                </Box>
                            </List>
                        </Collapse>
                        <br/>
                        {/* Product history */}
                        <ListItemButton onClick={handleClickPh}>
                            <ListItemText primary="Product history" />
                            {openPh ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openPh} timeout="auto" unmountOnExit>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                    alignItems: 'baseline',
                                    gridGap: '60px 60px',

                                }}>
                                    {myOrders.map((order, index)=> (<OrderCard key={index} product={order}/>))}
                                
                            </div>
                        </Collapse>
                    </List>
                </div>
                <br />
                <br />
                <div>
                    <Button
                        style={{ backgroundColor: '#006600', color: 'white' }}
                        variant="contained"
                        component="label"
                        onClick={saveChangesButton}
                    >
                        Save changes
                    </Button>
                </div>
                <br />
                <div>
                    <Button
                        style={{ backgroundColor: '#006600', color: 'white' }}
                        variant="contained"
                        component="label"
                        onClick={() => deleteUser()}
                    >
                        Delete my account
                    </Button >

                </div>
                <br />
                <br />

            </ContentElement>
        </Container>
    );
}
const mapStateToProps = ({ auth, product }) => ({
    user: auth.user,
    orders: product.orders
});
const mapDispatchToProps = {
    saveChanges: AuthActions.saveChanges,
    deleteUser: AuthActions.deleteUser,
    addCredits: AuthActions.addCredits,
    getOrders: ProductActions.getOrders

};

export default connect(mapStateToProps, mapDispatchToProps)(Userprofile);







