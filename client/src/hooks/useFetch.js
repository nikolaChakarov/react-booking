import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [dbRes, setDbRes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const result = await (
					await fetch(`http://localhost:8008/api/${url}`)
				).json();

				setDbRes(result);
			} catch (err) {
				setError(err);
			}

			setLoading(false);
		};

		fetchData();
	}, []);

	const refetch = async () => {
		console.log(url);
		setLoading(true);

		try {
			const result = await (
				await fetch(`http://localhost:8008/api/${url}`)
			).json();

			setDbRes(result);
		} catch (err) {
			setError(err);
		}

		setLoading(false);
	};

	return { data: dbRes.data || [], loading, error, refetch };
};

export default useFetch;
