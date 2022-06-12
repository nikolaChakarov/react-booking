import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <HomePageContainer className='home-page-container'>
            <Navbar />
            <Header />
        </HomePageContainer>
    )
};

const HomePageContainer = styled.div`
`;

export default Home