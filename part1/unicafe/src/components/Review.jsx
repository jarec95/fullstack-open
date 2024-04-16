const Review = ({ review }) => {
	return (
		<p>
			{review.type} {review.value}
		</p>
	);
};

export default Review;
