import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import calcDays from '../../utils/calcDays';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];

	const { reservationInfo } = useContext(AuthContext);

	const [daysCount, setDaysCount] = useState(calcDays(reservationInfo.dates[0], reservationInfo.dates[1]));

	const [photoClick, setPhotoClick] = useState({
		id: "",
	});

	const params = useParams();

	const { data, loading, error, refetch } = useFetch(
		`hotels/find_hotel_by_id/${params.id}`
	);

	// console.log(data);

	return (
		<HotelContainer>
			<Navbar />
			<Header type={"hotels"} />

			<div className="main-wrapper">
				{photoClick.id !== "" ? (
					<Slider
						images={photos}
						index={photoClick.id}
						setPhotoClick={setPhotoClick}
					/>
				) : null}

				{loading ? (
					<p className="loading-p">Loading, please wait...</p>
				) : (
					<div className="hotel-wrapper">
						<button className="book-now">Reserve or Book Now!</button>
						<h1 className="hotel-title">{data.name}</h1>
						<div className="hotel-address">
							<FontAwesomeIcon icon={faLocationDot} />
							<span>{data.address}</span>
						</div>

						<span className="hotel-distance">
							Excellent location - {data.distance}m from center
						</span>

						<span className="hotel-price-highlight">
							Book a stay over ${data.cheapestPrice} at this property and get a
							free airport taxi
						</span>

						<div className="hotel-images">
							{photos.map((photo, i) => (
								<div className="hotel-image-wrapper" key={i}>
									<img
										src={photo.src}
										alt=""
										className="hotel-img"
										onClick={() => setPhotoClick({ id: i })}
									/>
								</div>
							))}
						</div>

						<div className="hotel-details">
							<div className="hotel-details-texts">
								<h1 className="hotel-title">{data.title}</h1>
								<p className="hotel-desc">
									{/* Located a 5-minute walk from St. Florian's Gate in Krakow,
									Tower Street Apartments has accommodations with air
									conditioning and free WiFi. The units come with hardwood
									floors and feature a fully equipped kitchenette with a
									microwave, a flat-screen TV, and a private bathroom with
									shower and a hairdryer. A fridge is also offered, as well as
									an electric tea pot and a coffee machine. Popular points of
									interest near the apartment include Cloth Hall, Main Market
									Square and Town Hall Tower. The nearest airport is John Paul
									II International Kraków–Balice, 16.1 km from Tower Street
									Apartments, and the property offers a paid airport shuttle
									service. */}
									{data.desc}
								</p>
							</div>
							<div className="hotel-details-price">
								<h1>Perfect for a {daysCount}-night stay!</h1>
								<span>
									Located in the real heart of Krakow, this property has an
									excellent location score of 9.8!
								</span>
								<h2>
									<b>${daysCount * data.cheapestPrice * reservationInfo.options.room}</b> ({daysCount} nights)
								</h2>
								<button>Reserve or Book Now!</button>
							</div>
						</div>
					</div>
				)}
				<MailList />
				<Footer />
			</div>
		</HotelContainer>
	);
};

const HotelContainer = styled.div`
	position: relative;

	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		gap: 30px;
	}

	.hotel-wrapper {
		width: 100%;
		max-width: 1024px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		position: relative;
	}

	.book-now {
		position: absolute;
		top: 10px;
		right: 0;
		border: none;
		padding: 10px 20px;
		background-color: var(--blue-light);
		color: #fff;
		font-weight: bold;
		border-radius: 5px;
	}

	.hotel-title {
		font-size: 24px;
	}

	.hotel-address {
		font-style: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.hotel-distance {
		color: var(--blue-light);
		font-weight: 500;
	}

	.hotel-price-highlight {
		color: var(--green);
		font-weight: 500;
	}

	.hotel-images {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.hotel-image-wrapper {
		width: 33%;
	}

	.hotel-img {
		width: 100%;
		object-fit: cover;
		cursor: pointer;
	}

	.hotel-details {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		margin-top: 20px;
	}

	.hotel-details-texts {
		flex: 3;
	}

	.hotel-desc {
		font-size: 14px;
		margin-top: 20px;
	}

	.hotel-details-price {
		flex: 1;
		background-color: #ebf3ff;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.hotel-details-price > h1 {
		font-size: 18px;
		color: #777;
	}

	.hotel-details-price > span {
		font-size: 14px;
	}

	.hotel-details-price > h2 {
		font-weight: 300;
	}

	.hotel-details-price > button {
		border: none;
		padding: 10px 20px;
		background-color: var(--blue-light);
		color: #fff;
		font-weight: bold;
		border-radius: 5px;
	}

	.mail-list {
		margin-top: 0;
	}
`;

export default Hotel;
