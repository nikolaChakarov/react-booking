import styled from "styled-components";

import React from "react";

const SearchItem = () => {
	return (
		<SearchItemContainer className="search-item">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt=""
				className="si-img"
			/>

			<div className="si-desc">
				<h1 className="si-title">Tower Street Apartments</h1>
				<span className="si-distance">500m from center</span>
				<span className="si-taxi-op">Free airport taxi</span>
				<span className="si-subtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="si-features">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="si-cancel-op">Free cancellation </span>
				<span className="si-cancel-op-subtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>

			<div className="si-details">
				<div className="si-rating">
					<span>Exellent</span>
					<button>8.9</button>
				</div>

				<div className="si-detail-texts">
					<span className="si-price">$123</span>
					<span className="si-tax-op">Includes taxes and fees</span>
					<button className="si-check-bttn">See availability</button>
				</div>
			</div>
		</SearchItemContainer>
	);
};

const SearchItemContainer = styled.div`
	border: 1px solid #777;
	padding: 10px;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	margin-bottom: 20px;

	.si-img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	.si-desc {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex: 2;
	}

	.si-title {
		font-size: 20px;
		color: var(--blue-light);
	}

	.si-distance {
		font-size: 12px;
	}

	.si-taxi-op {
		font-size: 12px;
		background-color: var(--green);
		width: max-content;
		padding: 3px 5px;
		border-radius: 3px;
		color: #fff;
	}

	.si-subtitle {
		font-size: 12px;
		font-weight: bold;
	}

	.si-features {
		font-size: 12px;
	}

	.si-cancel-op {
		font-size: 12px;
		color: var(--green);
		font-weight: bold;
	}

	.si-cancel-op-subtitle {
		font-size: 12px;
		color: var(--green);
	}

	.si-details {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.si-rating {
			display: flex;
			justify-content: space-between;
		}

		.si-rating > span {
			font-weight: 500;
		}

		.si-rating > button {
			background-color: var(--blue);
			color: #fff;
			padding: 5px;
			font-weight: bold;
			border: none;
		}

		.si-detail-texts {
			text-align: right;
			display: flex;
			flex-direction: column;
			gap: 5px;
		}

		.si-price {
			font-size: 24px;
		}

		.si-tax-op {
			font-size: 12px;
			color: #777;
		}

		.si-check-bttn {
			background-color: var(--blue-light);
			border: none;
			color: #fff;
			font-weight: bold;
			padding: 10px 5px;
			border-radius: 5px;
		}
	}
`;

export default SearchItem;
