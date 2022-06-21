import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Login = () => {
	const navigate = useNavigate();
	const { dispatch, error, isLoading } = useContext(AuthContext);

	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setCredentials((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleClick = async (e) => {
		e.preventDefault();

		dispatch({
			type: "LOGIN_START",
		});

		try {
			const res = await (
				await fetch(`http://localhost:8008/api/auth/login`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify(credentials),
				})
			).json();

			if (!res.success) {
				throw new Error(res.message);
			}
			dispatch({
				type: "SUCCESS_LOGIN",
				payload: res.user,
			});

			navigate("/");
		} catch (err) {
			console.log(err);
			dispatch({
				type: "FAILURE_LOGIN",
				payload: err.message,
			});
		}
	};

	return (
		<LoginEl>
			<div className="l-wrapper">
				<input
					type="text"
					placeholder="username"
					className="l-input"
					name="username"
					onChange={handleChange}
					value={credentials.username}
				/>
				<input
					type="text"
					placeholder="password"
					className="l-input"
					name="password"
					onChange={handleChange}
					value={credentials.password}
				/>
				<button onClick={handleClick} className="l-bttn" disabled={isLoading}>
					Login
				</button>
				{error && <span>{error}</span>}
			</div>
		</LoginEl>
	);
};

const LoginEl = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.l-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.l-input {
		height: 30px;
		padding: 10px;
	}

	.l-bttn {
		border: none;
		padding: 10px 20px;
		background-color: var(--blue-light);
		color: white;
		font-weight: bold;
		cursor: pointer;
		border-radius: 5px;
	}

	.l-bttn:disabled {
		background-color: var(--blue-light);
		cursor: not-allowed;
	}
`;

export default Login;
