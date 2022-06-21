import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { format } from "date-fns";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faPlane,
	faCar,
	faTaxi,
	faPuzzlePiece,
	faCalendarDays,
	faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ type }) => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const [destination, setDestination] = useState("");
	const [openCalendar, setOpenCalendar] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const handleOpenCalendar = () => {
		setOpenCalendar(!openCalendar);
	};

	const handleOption = (type, direction) => {
		setOptions((prev) => ({
			...prev,
			[type]: direction === "d" ? prev[type] - 1 : prev[type] + 1,
		}));
	};

	const handleSearch = () => {

		dispatch({
			type: 'NEW_SEARCH',
			payload: {
				city: destination,
				dates: [date[0].startDate, date[0].endDate],
				options: {
					adult: options.adult,
					children: options.children,
					room: options.room
				}
			}
		})

		navigate("/hotels", { state: { destination, date, options } });
	};

	return (
		<HeaderContainer className="header-container" type={type}>
			<div className="header-wrapper">
				<div className="header-list">
					<div className="header-list-item active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faPuzzlePiece} />
						<span>Attractions</span>
					</div>
					<div className="header-list-item">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxi</span>
					</div>
				</div>

				{type !== "hotels" && (
					<>
						<h1 className="header-title">
							A lifetime of discounts? It's Genius.
						</h1>
						<p className="header-desc">
							Get rewarder for your travels - unlock instant savings of 10% or
							more with a free nc booking account
						</p>
						<button className="header-bttn">Sign in / Resister</button>

						<div className="header-search">
							<div className="header-search-item">
								<FontAwesomeIcon icon={faBed} className={"header-icon"} />
								<input
									type="text"
									placeholder="Where are you going"
									className="header-search-input"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>

							<div className="header-search-item">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className={"header-icon"}
								/>
								<span
									className="header-search-text"
									onClick={handleOpenCalendar}
								>
									{format(date[0].startDate, "dd/MM/yyyy")} to{" "}
									{format(date[0].endDate, "dd/MM/yyyy")}
								</span>

								{openCalendar && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className={"date-calendar"}
										minDate={new Date()}
									/>
								)}
							</div>

							<div className="header-search-item">
								<FontAwesomeIcon icon={faPerson} className={"header-icon"} />
								<span
									className="header-search-text"
									onClick={() => setOpenOptions(!openOptions)}
								>
									{options.adult} adults · {options.children} · children{" "}
									{options.room} · room
								</span>

								{openOptions && (
									<div className="options">
										<div className="option-item">
											<span className="option-text">Adult</span>
											<div className="option-counter">
												<button
													disabled={options.adult <= 1}
													className="option-counter-bttn"
													onClick={() => handleOption("adult", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.adult}
												</span>
												<button
													className="option-counter-bttn"
													onClick={() => handleOption("adult", "i")}
												>
													+
												</button>
											</div>
										</div>

										<div className="option-item">
											<span className="option-text">Children</span>
											<div className="option-counter">
												<button
													disabled={options.children <= 0}
													className="option-counter-bttn"
													onClick={() => handleOption("children", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.children}
												</span>
												<button
													className="option-counter-bttn"
													onClick={() => handleOption("children", "i")}
												>
													+
												</button>
											</div>
										</div>

										<div className="option-item">
											<span className="option-text">Room</span>
											<div className="option-counter">
												<button
													disabled={options.room <= 1}
													className="option-counter-bttn"
													onClick={() => handleOption("room", "d")}
												>
													-
												</button>
												<span className="option-counter-number">
													{options.room}
												</span>
												<button
													className="option-counter-bttn"
													onClick={() => handleOption("room", "i")}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>

							<div className="header-search-item">
								<button className="header-bttn" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	background: var(--blue);
	color: #fff;
	display: flex;
	justify-content: center;
	border-top: 1px groove var(--blue);
	position: relative;

	.header-wrapper {
		flex: 1;
		max-width: 1024px;
		margin: ${({ type }) => `20px 0 ${type === "hotels" ? 0 : "100px"}  0`};
		.header-list {
			display: flex;
			gap: 40px;
			margin-bottom: 20px;

			.header-list-item {
				display: flex;
				align-items: center;
				gap: 10px;
				font-weight: 300;
			}

			.header-list-item.active {
				border: 1px solid #fff;
				padding: 10px;
				border-radius: 5px;
			}
		}

		.header-desc {
			margin: 20px 0;
		}

		.header-bttn {
			background: var(--blue-light);
			color: #fff;
			border: none;
			padding: 10px;
			border-radius: 3px;
			font-weight: 500;
		}

		.header-search {
			height: 30px;
			border: 3px solid var(--yellow);
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 10px 0;
			border-radius: 5px;
			position: absolute;
			bottom: -25px;
			width: 100%;
			max-width: 1024px;

			.header-icon {
				color: #b3b3b3;
			}

			.header-search-item {
				display: flex;
				align-items: center;
				gap: 10px;
			}

			.header-search-input {
				border: none;
				color: #777;
			}

			.header-search-text {
				color: #777;
				cursor: pointer;
			}

			.date-calendar {
				position: absolute;
				top: 50px;
				border: 3px solid var(--yellow);
				z-index: 2;
			}
		}

		.options {
			position: absolute;
			top: 50px;
			background: #fff;
			color: #777;
			border-radius: 5px;
			box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
			z-index: 2;

			.option-item {
				width: 200px;
				display: flex;
				justify-content: space-between;
				margin: 10px;
			}

			.option-counter {
				display: flex;
				align-items: center;
				gap: 10px;
				font-size: 12px;
			}

			.option-counter-bttn {
				width: 30px;
				height: 30px;
				border: 1px solid var(--blue);
				background-color: #fff;
			}

			.option-counter-bttn:disabled {
				cursor: not-allowed;
			}
		}
	}
`;

export default Header;
