import React from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons'
import { TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';

const productCategories = [
    {
        value: 'Clothes',
    },
    {
        value: 'Home',
    },
    {
        value: 'Kitchen',
    },
    {
        value: 'Games',
    },
    {
        value: 'Sport',
    },
];

function SellProduct() {
    const [productCat, setproductCat] = React.useState('EUR');

    const handleChange = (event) => {
        setproductCat(event.target.value);
    };
    return (
        <Container>
            <ContentElement>
                <div>
                    <List
                        sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
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
                                <h3> Give us some informations about your product: </h3>
                                <br />
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Product name"
                                        defaultValue=''
                                    />
                                </div>
                                <br />
                                <div>
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Product category"
                                        value={productCat}
                                        onChange={handleChange}
                                        helperText="It is important that you specify a product category so that your sold product can be found more easily!"
                                    >
                                        {productCategories.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <br />
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Description"
                                        multiline
                                        maxRows={4}

                                    />
                                </div>
                                <br />
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
                    <br />
                    <br />
                    <RegisterButton >
                        <RegisterButtonLink to='/welcome'>Done!</RegisterButtonLink>
                    </RegisterButton>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </ContentElement>
        </Container>
    )
}

export default SellProduct