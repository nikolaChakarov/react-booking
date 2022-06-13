import React from "react";
import styled from "styled-components";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
	return (
		<HomePageContainer className="home-page-container">
			<Navbar />
			<Header />

			<div className="home-wrapper">
				<Featured />
				<h1 className="home-title">Browse by property type</h1>
				<PropertyList />
				<h1 className="home-title">Home guest love</h1>
				<FeaturedProperties />
				<MailList />
				<Footer />
			</div>
		</HomePageContainer>
	);
};

const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;

	.home-title {
		width: 1024px;
		font-size: 20px;
	}

	.home-wrapper {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}
`;

export default Home;
