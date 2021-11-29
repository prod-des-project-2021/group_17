/* import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'

const Userprofil = () => {
    return (
        <Container>
            <ContentElement>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <h1>Userprofil</h1>

                </div>
            </ContentElement>
        </Container>

    )
}

export default Userprofil */

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';

function Age() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container>
            <ContentElement>
                <Box sx={{ minWidth: 120 }}>
                    <p> Select your age: </p>
                    <br />
                    <FormControl sx= {{Width: 60 }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            color="primary"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={21}>21</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={23}>23</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={26}>26</MenuItem>
                            <MenuItem value={27}>27</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={29}>29</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={31}>31</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={33}>33</MenuItem>
                            <MenuItem value={34}>34</MenuItem>
                            <MenuItem value={35}>35</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={37}>37</MenuItem>
                            <MenuItem value={38}>38</MenuItem>
                            <MenuItem value={39}>39</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={41}>41</MenuItem>
                            <MenuItem value={42}>42</MenuItem>
                            <MenuItem value={43}>43</MenuItem>
                            <MenuItem value={44}>44</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={46}>46</MenuItem>
                            <MenuItem value={47}>47</MenuItem>
                            <MenuItem value={48}>48</MenuItem>
                            <MenuItem value={49}>49</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </ContentElement>
        </Container>
    );
}
export default Age;



