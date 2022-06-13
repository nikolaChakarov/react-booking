import styled from "styled-components";

const Featured = () => {
	return (
		<FeaturedContainer className="featured">
			<div className="featured-item">
				<img
					src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
					alt=""
					className="featured-img"
				/>
				<div className="featured-titles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>

			<div className="featured-item">
				<img
					src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
					alt=""
					className="featured-img"
				/>
				<div className="featured-titles">
					<h1>Austin</h1>
					<h2>523 properties</h2>
				</div>
			</div>

			<div className="featured-item">
				<img
					src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
					alt=""
					className="featured-img"
				/>
				<div className="featured-titles">
					<h1>Reno</h1>
					<h2>533 properties</h2>
				</div>
			</div>
		</FeaturedContainer>
	);
};

const FeaturedContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	border: 1px dashed green;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	color: #fff;
	z-index: 1;

	.featured-item {
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		height: 250px;
	}

	.featured-img {
		width: 100%;
		object-fit: cover;
	}

	.featured-titles {
		position: absolute;
		bottom: 20px;
		left: 20px;
	}
`;

export default Featured;
