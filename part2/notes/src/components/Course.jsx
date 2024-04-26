import Content from "./Content";
import Header from "./Header";
import Information from "./Information";
export default function Course({ course }) {
	return (
		<div>
			<Header name={course.name}></Header>
			<Content parts={course.parts} />
			<Information course={course} />
		</div>
	);
}

/*

Course has id, name, and parts
parts contain a name, number of exercises and an id

*/
