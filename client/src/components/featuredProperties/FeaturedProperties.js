import styled from "styled-components";

import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch("hotels?limit=4&min=1&max=1000");

	// console.log(data);

	return (
		<FeaturedPropertiesContainer className="fp" items={data.length}>
			{loading ? (
				<p className="loading-p">Loading, please wait...</p>
			) : (
				<>
					{data.map((el, i) => (
						<div className="fp-item" key={i}>
							<img
								src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
								alt=""
								className="fp-img"
							/>
							<span className="fp-name">{el.name}</span>
							<span className="fp-city">{el.city}</span>
							<span className="fp-price">
								Starting from ${el.cheapestPrice}
							</span>
							{el.rating && (
								<div className="fp-rating">
									<button>{el.rating}</button>
									<span>Excellent</span>
								</div>
							)}
						</div>
					))}
				</>
			)}
		</FeaturedPropertiesContainer>
	);
};

const FeaturedPropertiesContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	display: flex;
	justify-content: ${({ items }) => (items >= 4 ? "space-between" : "")};
	gap: 20px;

	.fp-item {
		flex: 1;
		max-width: 25%;
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
