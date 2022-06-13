import React from "react";
import styled from "styled-components";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Hotels = () => {
	return (
		<HotelsContainer>
			<Navbar />
			<Header type="hotels" />
		</HotelsContainer>
	);
};

const HotelsContainer = styled.div``;

export default Hotels;
