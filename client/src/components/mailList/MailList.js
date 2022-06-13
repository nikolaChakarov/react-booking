import styled from "styled-components";

import React from "react";

const MailList = () => {
	return (
		<MailListContainer className="mail-list">
			<h1 className="mail-title">Save time, save money!</h1>
			<span className="mail-desc">
				Sign up and we'll send the best deals to you
			</span>
			<div className="mail-input-container">
				<input type="text" placeholder="Your Email" />
				<button>Subscribe</button>
			</div>
		</MailListContainer>
	);
};

const MailListContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	margin-top: 50px;
	background-color: var(--blue);
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 50px;

	.mail-input-container > input {
		width: 300px;
		height: 30px;
		padding: 10px;
		margin-right: 10px;
		border-radius: 5px;
		border: none;
	}

	.mail-input-container > button {
		border-radius: 5px;
		height: 50px;
		background: var(--blue-light);
		color: #fff;
		border: none;
		font-weight: 500;
		padding: 5px;
	}
`;

export default MailList;
