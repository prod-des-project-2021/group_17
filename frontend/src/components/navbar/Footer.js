import React from "react";
import { BoxFooter, ContainerFooter, ColumnFooter, FooterLink } from "./FooterElement";

const Footer = () => {
	return (
		<>
			<BoxFooter>
				<ContainerFooter>
					<ColumnFooter>
						<FooterLink to='/feedback'> Feedback </FooterLink>
					</ColumnFooter>
					<ColumnFooter>
						<FooterLink to='/contactus'> Contact </FooterLink>
					</ColumnFooter>
					<ColumnFooter>
						<FooterLink to='/legalnotice'> Legal Notice </FooterLink>
					</ColumnFooter>
				</ContainerFooter>
			</BoxFooter>
		</>
	);
};
export default Footer;


