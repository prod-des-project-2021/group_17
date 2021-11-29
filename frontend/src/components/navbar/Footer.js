
import React from "react";
import { BoxFooter, ContainerFooter, RowFooter, ColumnFooter, FooterLink } from "./FooterElement";

const Footer = () => {
	return (
		<>
			<BoxFooter>
				<ContainerFooter>
					{/* <RowFooter> */}
					<ColumnFooter>
						<FooterLink to='/feedback' activeSytle> Feedback </FooterLink>
					</ColumnFooter>
					<ColumnFooter>
						<FooterLink to='/contactus' activeSytle> Contact </FooterLink>
					</ColumnFooter>
					<ColumnFooter>
						<FooterLink to='/legalnotice' activeSytle> Legal Notice </FooterLink>
					</ColumnFooter>
					{/* </RowFooter> */}
				</ContainerFooter>
			</BoxFooter>
		</>
	);
};
export default Footer;


