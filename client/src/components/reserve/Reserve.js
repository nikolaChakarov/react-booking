import styled from "styled-components";

import useFetch from "../../hooks/useFetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Reserve = ({ setOpenReserve, hotelId }) => {
	// console.log(hotelId);
	const { data } = useFetch(`hotels/rooms/${hotelId}`);

	console.log(data);

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

						<div className="room"></div>
					</div>
				))}
			</div>
		</ReserveEl>
	);
};

const ReserveEl = styled.div``;

export default Reserve;
