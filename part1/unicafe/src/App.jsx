import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

import "./App.css";

function App() {
	const GOOD_TYPE = "good";
	const BAD_TYPE = "bad";
	const NEUTRAL_TYPE = "neutral";
	const [reviews, setReviews] = useState([
		{ type: "good", value: 0 },
		{ type: "neutral", value: 0 },
		{ type: "bad", value: 0 },
	]);

	const handleClick = (event) => {
		let reviewType = event.target.id;
		console.log(reviewType);
		updateReviewState(reviewType);
	};

	const updateReviewState = (reviewType) => {
		const newReviewState = reviews.map((review) => {
			if (review.type === reviewType) {
				let newReview = {
					...review,
					value: review.value + 1,
				};

				return newReview;
			}

			return review;
		});
		setReviews(newReviewState);
	};

	const renderFeedback = reviews.some((review) => review.value > 0) ? (
		<Statistics reviews={reviews} />
	) : (
		<p>No feedback given</p>
	);

	return (
		<>
			<div>
				<Header title={"give feedback"}></Header>
				<p>
					<Button handleClick={handleClick} type={GOOD_TYPE} text={"good"} />
					<Button
						handleClick={handleClick}
						type={NEUTRAL_TYPE}
						text={"neutral"}
					/>
					<Button handleClick={handleClick} type={BAD_TYPE} text={"bad"} />
				</p>
				{renderFeedback}
			</div>
		</>
	);
}

export default App;
