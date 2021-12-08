import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { ContentElement } from '../components/navbar/ContentElement'
import { connect } from 'react-redux'
import { RegisterButton, RegisterButtonLink } from '../components/navbar/Buttons';

const Startpage = (props) => {
    const [fName,setFName] = useState("");
    const [lName,setLName] = useState("");
    const {user} = props;

    useEffect(
		() => {
			if(user){
                setFName(user.first_name);
                setLName(user.last_name);
            }
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ user ]
	);

    return (
        <Container>
            <ContentElement>
                <div>
                    <h1>Hello {fName + " " + lName}!</h1>
                    <br />
                    <p>Welcome to the official website of PSOAStore. <br />
                        Here students of Oulu University of Applied Sciences (OAMK) can buy second hand goods or sell their own unwanted goods. <br />
                        This is an ideal way to cope with living in the PSOAS dormitories,
                        as you don't have to buy all the new items and can sell everything again at the end of your stay if you want to.
                    </p>
                    <br />
                    <p>Happy shopping!</p>
                    <p>PSOAStore Team</p>
                    <br />
                    <br />
                    <RegisterButton >
                        <RegisterButtonLink to='/sellproduct'>Sell a product!</RegisterButtonLink>
                    </RegisterButton>
                    <br />
                    <RegisterButton >
                        <RegisterButtonLink to='/viewproduct'>View your products!</RegisterButtonLink>
                    </RegisterButton>
                </div>
                <br />
                <br />
            </ContentElement>
        </Container>

    )
}

const mapStateToProps = ({ auth }) => ({
	user: auth.user
});

export default connect(mapStateToProps, null)(Startpage);


