import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarContainer className='navbar-container'>
            <div className="nav-wrapper">
                <span className="logo">nc booking</span>
                <div className="nav-items">
                    <button className="nav-bttn">Register</button>
                    <button className="nav-bttn">Login</button>
                </div>
            </div>
        </NavbarContainer>
    )
};

const NavbarContainer = styled.nav`
    height: 50px;
    background: var(--blue);
    display: flex;
    justify-content: center;

    .nav-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1024px;
        font-weight: 500;
        color: #fff;
    }

    .nav-bttn {
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        background: #fff;
        color: var(--blue);
         &:first-of-type {
            margin-right: 20px;
         }
    }
`

export default Navbar