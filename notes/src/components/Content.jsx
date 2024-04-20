import Part from "./Part";

export default function Content({ parts }) {
	return (
		<div>
			<ul>
				{parts.map((part) => {
					return <Part key={part.id} part={part} />;
				})}
			</ul>
		</div>
	);
}
