import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';

// Searchfield
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'green',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

// Search bar icon
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function SearchBar() {
    return (
        <Container>
            <ContentElement>
                <Box sx={{ flexGrow: 1}}>
                <h1>You are looking for a certain item? We got you!</h1> <br />
                    <br />
                    <p>Simply enter a keyword or specific product name in the search bar, and we will show you the best results. <br />
                        Or sort your requests by price and release date in the choosen category.</p> <br /> 
                    <br />
                    <br />
                    <h3>Search for it here!</h3> <br />
                    <AppBar position="static">
                        <Toolbar sx={{ backgroundColor: 'lightgrey' }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ContentElement>
        </Container>
    );
}

export default SearchBar;