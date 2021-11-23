/* import React from 'react';
import { Foot, FooterLink, FooterMenu, Bars } from './FooterElement';

const Footer = () => {
    return (
        <>
          <Foot>
              <Bars />
              <FooterMenu>
                  <FooterLink to='/legalnotice' activeStyle>
                      Legal notice
                  </FooterLink>
                  <FooterLink to='/contactus' activeStyle>
                      Contact us
                  </FooterLink>
              </FooterMenu>
          </Foot>
        </>
    )
}

export default Footer */

import React from "react";
import { Box, Container, Row, Column, FooterLink }  from "./FooterElement";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<FooterLink to='/contactus'> Contact Us </FooterLink>
		</Column>
		<Column>
			<FooterLink to='/legalnotice'> Legal Notice </FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;


