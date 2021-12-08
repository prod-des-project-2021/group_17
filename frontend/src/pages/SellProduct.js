import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { ContentElement } from '../components/navbar/ContentElement';
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';
import { TextField } from '@material-ui/core';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';

const productCategories = [
	{
		value: 'Clothes'
	},
	{
		value: 'Home'
	},
	{
		value: 'Kitchen'
	},
	{
		value: 'Games'
	},
	{
		value: 'Sport'
	}
];

function SellProduct() {
	const [ pFiles, setPFiles ] = useState([]);
    const [ pName, setPName ] = useState();
    const [ pCategory, setPCategory ] = useState();
    const [ pDescription, setPDescription ] = useState();
    const [ pPrice, setPPrice ] = useState();

	const handleFileSelected = (e) => {
		const files = Array.from(e.target.files);
		const tempFileArray = [];
		files.forEach(async function(file) {
			let base64 = await convertBase64(file);
			tempFileArray.push({
				file: file,
				base64: base64
			});
		});
        setPFiles(tempFileArray);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleNameChange = (event) => {
		setPName(event.target.value);
	};

    const handleCategoryChange = (event) => {
		setPCategory(event.target.value);
	};

    const handleDescriptionChange = (event) => {
		setPDescription(event.target.value);
	};

    const handlePriceChange = (event) => {
		setPPrice(event.target.value);
	};

	return (
		<Container>
			<ContentElement>
				<div>
					<List
						sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={<ListSubheader component="div" id="nested-list-subheader" />}
					>
						<List component="div" disablePadding>
							<Box
								component="form"
								sx={{
									'& .MuiTextField-root': { m: 1, width: '25ch' }
								}}
								noValidate
								autoComplete="off"
							>
								<h3> Give us some informations about your product: </h3>
								<br />
								<div>
									<TextField required id="outlined-required" onChange={handleNameChange} label="Product name" defaultValue="" />
								</div>
								<br />
								<div>
									<TextField
										id="outlined-select-currency-native"
										select
										label="Product category"
										value={pCategory}
										onChange={handleCategoryChange}
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
                                        onChange={handleDescriptionChange}
										multiline
										maxRows={4}
									/>
								</div>
								<br />
								<div>
									<TextField required id="outlined-required" onChange={handlePriceChange} label="Price" defaultValue="" />
								</div>
								<Button
									style={{ backgroundColor: '#006600', color: 'white' }}
									variant="contained"
									component="label"
								>
									Upload File
									<input
										type="file"
										onChange={handleFileSelected}
										accept="image/*"
										hidden
										multiple="multiple"
									/>
								</Button>
                                {pFiles.map(f => (<p style={{paddingTop:'10px'}}> {f.file.name} </p>))}
							</Box>
						</List>
					</List>
					<br />
					<RegisterButton>
						<RegisterButtonLink to="/welcome">Done!</RegisterButtonLink>
					</RegisterButton>
					<br />
					<br />
					<br />
					<br />
				</div>
			</ContentElement>
		</Container>
	);
}

export default SellProduct;
