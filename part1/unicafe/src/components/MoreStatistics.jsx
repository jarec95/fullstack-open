const MoreStatistics = ({ reviews }) => {
	const GOOD_WEIGHT = 1;
	const NEUTRAL_WEIGHT = 0;
	const BAD_WEIGHT = -1;
	let sum = reviews.reduce((acc, curr) => {
		return acc + curr.value;
	}, 0);
	let weightedScore = 0;
	let goodScore = reviews.find((review) => review.type === "good")?.value;

	reviews.forEach((review) => {
		switch (review.type) {
			case "good":
				weightedScore += GOOD_WEIGHT * review.value;
				break;
			case "neutral":
				weightedScore += NEUTRAL_WEIGHT * review.value;
				break;
			case "bad":
				weightedScore += BAD_WEIGHT * review.value;
				break;
			default:
				break;
		}
	});

	let calculatedAverage = weightedScore ? weightedScore / sum : 0;

	return (
		<div>
			<p>average: {calculatedAverage}</p>
			<p>all: {sum}</p>
			<p>positive: {goodScore / sum}</p>
		</div>
	);
};

export default MoreStatistics;
