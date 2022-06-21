import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";

const App = () => {
	return (
		<AppContainer className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/hotels/:id" element={<Hotel />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</AppContainer>
	);
};

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export default App;
