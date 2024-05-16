const Timer = (req, res, next) => {
	const start = Date.now();
	next();
	const end = Date.now();
	console.log(`Request took ${end - start}ms`);
};

module.exports = Timer;