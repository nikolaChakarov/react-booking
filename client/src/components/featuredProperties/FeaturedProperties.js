import styled from "styled-components";

import React from "react";

const FeaturedProperties = () => {
	return (
		<FeaturedPropertiesContainer className="fp">
			<div className="fp-item">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
					alt=""
					className="fp-img"
				/>
				<span className="fp-name">Aparthotel Stare Miasto</span>
				<span className="fp-city">Madrid</span>
				<span className="fp-price">Starting from $120</span>
				<div className="fp-rating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fp-item">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
					alt=""
					className="fp-img"
				/>
				<span className="fp-name">Comfort Suites Airport</span>
				<span className="fp-city">Austin</span>
				<span className="fp-price">Starting from $140</span>
				<div className="fp-rating">
					<button>9.3</button>
					<span>Exceptional</span>
				</div>
			</div>
			<div className="fp-item">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
					alt=""
					className="fp-img"
				/>
				<span className="fp-name">Four Seasons Hotel</span>
				<span className="fp-city">Lisbon</span>
				<span className="fp-price">Starting from $99</span>
				<div className="fp-rating">
					<button>8.8</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fp-item">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
					alt=""
					className="fp-img"
				/>
				<span className="fp-name">Hilton Garden Inn</span>
				<span className="fp-city">Berlin</span>
				<span className="fp-price">Starting from $105</span>
				<div className="fp-rating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
		</FeaturedPropertiesContainer>
	);
};

const FeaturedPropertiesContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	display: flex;
	justify-content: space-between;
	gap: 20px;

	.fp-item {
		flex: 1;
		gap: 10px;
		display: flex;
		flex-direction: column;
	}

	.fp-img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}

	.fp-name {
		font-weight: bold;
	}

	.fp-city {
		font-weight: 300;
	}

	.fp-price {
		font-weight: 500;
	}

	.fp-rating > button {
		background-color: var(--blue);
		border: none;
		color: #fff;
		padding: 3px;
		margin-right: 10px;
		font-weight: bold;
	}

	.fp-rating > span {
		font-size: 14px;
	}
`;

export default FeaturedProperties;
