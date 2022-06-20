import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import styled from "styled-components";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";

const Hotels = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);

	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState(location.state.date);

	const [options, setOptions] = useState(location.state.options);

	// console.log(location);

	const { data, loading, error } = useFetch(`hotels?city=${destination}`);

	return (
		<HotelsContainer>
			<Navbar />
			<Header type={"hotels"} />

			<div className="list-container">
				<div className="list-wrapper">
					<div className="list-search">
						<h1 className="ls-title">Search</h1>

						<div className="list-search-item">
							<label>Destination</label>
							<input type="text" placeholder={destination} />
						</div>

						<div className="list-search-item">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"dd/MM/yyyy"
							)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>

						<div className="list-search-item">
							<label>Options</label>

							<div className="ls-options">
								<div className="ls-option-item">
									<span className="ls-option-text">
										Min price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</div>

								<div className="ls-option-item">
									<span className="ls-option-text">
										Max price <small>per night</small>
									</span>
									<input type="number" className="ls-option-input" />
								</div>

								<div className="ls-option-item">
									<span className="ls-option-text">Adult</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.adult}
										min={1}
									/>
								</div>

								<div className="ls-option-item">
									<span className="ls-option-text">Children</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.children}
										min={0}
									/>
								</div>

								<div className="ls-option-item">
									<span className="ls-option-text">Room</span>
									<input
										type="number"
										className="ls-option-input"
										placeholder={options.room}
										min={1}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>

					<div className="list-result">
						{loading ? (
							<p>Loading, please wait...</p>
						) : (
							<>
								{data.map((el, i) => (
									<SearchItem {...el} key={i} />
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</HotelsContainer>
	);
};

const HotelsContainer = styled.div`
	display: flex;
	flex-direction: column;

	.list-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.list-wrapper {
		width: 100%;
		max-width: 1024px;
		display: flex;
		gap: 20px;
	}

	.list-search {
		flex: 1;
		background: var(--yellow);
		padding: 10px;
		border-radius: 10px;
		position: sticky;
		top: 10px;
		height: max-content;
	}

	.ls-title {
		font-size: 20px;
		color: #555;
		margin-bottom: 10px;
	}

	.list-search-item > label {
		font-size: 12px;
	}

	.list-search-item > input {
		height: 30px;
		border: none;
		padding: 5px;
	}

	.list-search-item > span {
		height: 30px;
		padding: 5px;
		display: flex;
		align-items: center;
		background-color: #fff;
		cursor: pointer;
		color: #777;
	}

	.list-search-item {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 10px;
		font-size: 12px;
	}

	.ls-options {
		padding: 10px;
	}

	.ls-option-input {
		width: 50px;
	}

	.ls-option-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		color: #555;
	}

	.list-search > button {
		padding: 10px;
		background: var(--blue-light);
		border: none;
		color: #fff;
		width: 100%;
		font-weight: 500;
	}

	.list-result {
		flex: 3;
	}
`;

export default Hotels;
