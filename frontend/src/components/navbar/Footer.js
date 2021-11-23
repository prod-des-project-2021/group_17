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


