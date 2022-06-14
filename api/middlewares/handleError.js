const handleError = (err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessge = err.message || "Something went wrong";

	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessge,
		stack: err.stack,
	});
};
module.exports = handleError;
