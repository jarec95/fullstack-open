export default function Information({ course }) {
	function getTotalNumExercises() {
		return course.parts.reduce((acc, curr) => {
			return acc + curr.exercises;
		}, 0);
	}
	return (
		<div>
			<p>Total number of exercises: {getTotalNumExercises()}</p>
		</div>
	);
}
