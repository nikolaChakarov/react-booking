import { useEffect, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmarkCircle,
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images, index, setPhotoClick }) => {
	const [indexToShow, setIndexToShow] = useState(index);
	const imagesLength = images.length - 1;

	const moveLeft = () => {
		let current = indexToShow <= 0 ? imagesLength : indexToShow - 1;
		setIndexToShow(current);
	};

	const moveRight = () => {
		let current = indexToShow >= imagesLength ? 0 : indexToShow + 1;
		setIndexToShow(current);
	};

	/* now scroll */
	useEffect(() => {
		document.body.style.overflow = "hidden";
		window.scrollTo({ top: 0 });

		return () => (document.body.style.overflow = "unset");
	}, []);

	return (
		<SliderContainer className="slider-container">
			<FontAwesomeIcon
				icon={faXmarkCircle}
				className="sl-close-bttn"
				onClick={() => setPhotoClick({ id: "" })}
			/>
			<div className="slider-wrapper">
				<img src={images[indexToShow].src} alt="" className="sl-image" />

				<FontAwesomeIcon
					icon={faChevronCircleLeft}
					className={"sl-bttn sl-bttn-left"}
					onClick={moveLeft}
				/>
				<FontAwesomeIcon
					icon={faChevronCircleRight}
					className={"sl-bttn sl-bttn-right"}
					onClick={moveRight}
				/>
			</div>
		</SliderContainer>
	);
};

const SliderContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.sl-close-bttn {
		color: #fff;
		position: absolute;
		top: 50px;
		right: 50px;
		font-size: 50px;
		cursor: pointer;
	}

	.slider-wrapper {
		position: relative;
		border: 5px solid #fff;
		width: 1024px;
		height: 500px;
	}

	.sl-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.sl-bttn {
		color: #fff;
		font-size: 50px;
		cursor: pointer;
		position: absolute;
		top: 50%;
		z-index: 2;
	}

	.sl-bttn-left {
		left: -60px;
	}
	.sl-bttn-right {
		right: -60px;
	}
`;

export default Slider;
