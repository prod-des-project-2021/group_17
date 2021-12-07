import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Container } from '@mui/material';
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
import { SaveButton } from '../components/navbar/Buttons';
import { Button } from '@mui/material';


function Userprofile() {
    const [openPD, setOpenPersonalData] = React.useState(false);
    const [openPP, setOpenProfilePic] = React.useState(false);
    const [openLG, setOpenLoginData] = React.useState(false);

    const handleClickPD = () => {
        setOpenPersonalData(!openPD);
    };
    const handleClickPP = () => {
        setOpenProfilePic(!openPP);
    };
    const handleClickLG = () => {
        setOpenLoginData(!openLG);
    };


    return (
        <Container>
            <ContentElement>
                <div>
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
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Lastname"
                                            defaultValue=''
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
                                        color="green"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
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
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                {/* adress */}
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
                                        />
                                    </div>
                                </Box>
                                <br />
                                <br />
                                <br />
                            </List>
                        </Collapse>
                        {/* Profilpicture */}
                        <ListItemButton onClick={handleClickPP}>
                            <ListItemText primary="Profilpicture" />
                            {openPP ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openPP} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {/* TODO */}
                            </List>
                        </Collapse>
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
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </Box>
                            </List>
                        </Collapse>
                    </List>
                </div>
                <div>
                    <SaveButton >
                        <Button sx={{ color: "green" }}>Save!</Button>
                    </SaveButton>
                </div>

            </ContentElement>
        </Container>
    );
}
export default Userprofile;







