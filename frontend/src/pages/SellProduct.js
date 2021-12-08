import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons'
import { TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

function SellProduct() {
    return (
        <Container>
            <ContentElement>
                <div>
                    <h1>Sell product</h1>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                        }
                    >
                        <List component="div" disablePadding>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <p> Give us some data for your product: </p>
                                <br />
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Product name"
                                        defaultValue=''
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Description"
                                        multiline
                                        maxRows={4}
                                        
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Price"
                                        defaultValue=''
                                    />
                                </div>
                            </Box>
                        </List>
                    </List>
                    <RegisterButton >
                        <RegisterButtonLink to='/welcome'>Done!</RegisterButtonLink>
                    </RegisterButton>
                </div>
            </ContentElement>
        </Container>
    )
}

export default SellProduct