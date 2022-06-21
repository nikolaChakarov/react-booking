import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = () => {
		localStorage.removeItem("user");

		dispatch({
			type: "LOGOUT",
		});
	};

	return (
		<NavbarContainer className="navbar-container">
			<div className="nav-wrapper">
				<Link to={"/"}>
					<span className="logo">nc booking</span>
				</Link>
				{user ? (
					<div className="nav-items">
						<span style={{ marginRight: "10px" }}>{user.username}</span>
						<button className="nav-bttn" onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<div className="nav-items">
						<button className="nav-bttn">Register</button>
						<button className="nav-bttn" onClick={() => navigate("/login")}>
							Login
						</button>
					</div>
				)}
			</div>
		</NavbarContainer>
	);
};

const NavbarContainer = styled.nav`
	height: 50px;
	background: var(--blue);
	display: flex;
	justify-content: center;

	.logo {
		color: #fff;
	}

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
`;

export default Navbar;
