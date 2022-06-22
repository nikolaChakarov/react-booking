import { useState } from "react";
import styled from "styled-components";

import useFetch from "../../hooks/useFetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Reserve = ({ setOpenReserve, hotelId }) => {
	// console.log(hotelId);
	const { data } = useFetch(`hotels/rooms/${hotelId}`);

	const [selectedRooms, setSelectedRooms] = useState([]);
	const handleSelectRoom = (e) => {
		const checked = e.target.checked;
		const roomId = e.target.value;

		setSelectedRooms(
			checked
				? [...selectedRooms, roomId]
				: selectedRooms.filter((el) => el !== roomId)
		);
	};

	const handleClick = (e) => {};

	return (
		<ReserveEl>
			<div className="r-wrapper">
				<FontAwesomeIcon
					icon={faXmarkCircle}
					onClick={() => setOpenReserve(false)}
					className="r-close"
				/>

				<span>Select your rooms:</span>
				{data.map((el, i) => (
					<div className="r-item" key={i}>
						<div className="r-info">
							<div className="r-title">{el.title}</div>
							<div className="r-desc">{el.desc}</div>
							<div className="r-max-people">
								Max people: <b>{el.maxPeople}</b>
							</div>
							<div className="r-price">{el.price}</div>
						</div>

						{el.roomNumbers.map((roomNumber, i) => {
							return (
								<div className="room" key={i}>
									<label>{roomNumber.number}</label>
									<input
										type="checkbox"
										value={roomNumber._id}
										onChange={handleSelectRoom}
										// disabled={selectedRooms.includes(roomNumber._id)}
									/>
								</div>
							);
						})}
					</div>
				))}
				<button onClick={handleClick} className="r-bttn">
					Reserve Now!
				</button>
			</div>
		</ReserveEl>
	);
};

const ReserveEl = styled.div``;

export default Reserve;
