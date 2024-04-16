import Header from "./Header";
import MoreStatistics from "./MoreStatistics";
import Review from "./Review";

const Statistics = ({ reviews }) => {
	let reviewComponents = reviews.map((review) => {
		return <Review key={review.type} review={review} />;
	});
	return (
		<div>
			<Header title={"statistics"} />
			<div>
				{reviewComponents}
				<MoreStatistics reviews={reviews} />
			</div>
		</div>
	);
};

export default Statistics;
