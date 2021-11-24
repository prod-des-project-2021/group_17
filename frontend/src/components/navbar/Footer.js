
import React from "react";
import { BoxFooter, ContainerFooter, RowFooter, ColumnFooter, FooterLink }  from "./FooterElement";

const Footer = () => {
return (
	<BoxFooter>
	<ContainerFooter>
		<RowFooter>
		<ColumnFooter>
			<FooterLink to='/contactus'> Contact Us </FooterLink>
		</ColumnFooter>
		<ColumnFooter>
			<FooterLink to='/legalnotice'> Legal Notice </FooterLink>
		</ColumnFooter>
		</RowFooter>
	</ContainerFooter>
	</BoxFooter>
);
};
export default Footer;


