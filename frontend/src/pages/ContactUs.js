import { Container } from '@mui/material'
import React from 'react'
import { ContentElement } from '../components/navbar/ContentElement'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Contactus = () => {
    return (
        <>
            <Container>
                <ContentElement>
                    {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                > */}
                    <h2> Hi! We are happy to have personal contact with you right away. <br /> </h2>
                    <br/>
                    <p> We hope there were no problems and your purchased product arrived in good condition. <br/>
                        But also in case of any problems we will be glad to help you.<br/>
                        <br/>
                        Please understand that we can only fix problems that are directly related to our site. <br/>
                        If you have a problem with a product or seller, we are happy to mediate and actively help to solve the problem. <br/>
                        <br/>
                        Our service staff will be happy to assist you.<br/>
                        <br/>
                    </p>
                    <h4> 
                        Mon - Fri: 8 a.m. - 6 p.m.<br/> 
                        Sat: 10 a.m. - 6 p.m.<br/>
                    </h4>
                    <br/>
                    <br/>
                    <br/>
                    <h1>{<PhoneIcon />} </h1> 
                    <p>Phone: 0123456789</p>
                    <br />
                    <br />
                    <h1>{<MailIcon />}</h1> 
                    <p>E-Mail: example@example.com</p>
                    <br />
                    <p>(Please note: When contacting us by email, remember to include your full name and, if applicable, your order number in case you have any problems with a purchased product.)</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* </div> */}
                </ContentElement>
            </Container>
        </>
    )
}

export default Contactus
