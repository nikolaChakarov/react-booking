import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterContainer className="footer">
			<div className="f-lists">
				<ul className="f-list">
					<li className="f-list-item">Countries</li>
					<li className="f-list-item">Regions</li>
					<li className="f-list-item">Cities</li>
					<li className="f-list-item">Districts</li>
					<li className="f-list-item">Airports</li>
					<li className="f-list-item">Hotels</li>
				</ul>
				<ul className="f-list">
					<li className="f-list-item">Homes </li>
					<li className="f-list-item">Apartments </li>
					<li className="f-list-item">Resorts </li>
					<li className="f-list-item">Villas</li>
					<li className="f-list-item">Hostels</li>
					<li className="f-list-item">Guest houses</li>
				</ul>
				<ul className="f-list">
					<li className="f-list-item">Unique places to stay </li>
					<li className="f-list-item">Reviews</li>
					<li className="f-list-item">Unpacked: Travel articles </li>
					<li className="f-list-item">Travel communities </li>
					<li className="f-list-item">Seasonal and holiday deals </li>
				</ul>
				<ul className="f-list">
					<li className="f-list-item">Car rental </li>
					<li className="f-list-item">Flight Finder</li>
					<li className="f-list-item">Restaurant reservations </li>
					<li className="f-list-item">Travel Agents </li>
				</ul>
				<ul className="f-list">
					<li className="f-list-item">Curtomer Service</li>
					<li className="f-list-item">Partner Help</li>
					<li className="f-list-item">Careers</li>
					<li className="f-list-item">Sustainability</li>
					<li className="f-list-item">Press center</li>
					<li className="f-list-item">Safety Resource Center</li>
					<li className="f-list-item">Investor relations</li>
					<li className="f-list-item">Terms & conditions</li>
				</ul>
			</div>
			<div className="f-text">Copyright © 2022 nc booking.</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	font-size: 12px;

	.f-lists {
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin-bottom: 50px;
	}

	.f-list-item {
		margin-bottom: 10px;
		color: var(--blue);
		cursor: pointer;
	}

	.f-text {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		color: #777;
	}
`;

export default Footer;
