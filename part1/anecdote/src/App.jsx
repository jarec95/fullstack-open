import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	let votes = {};

	for (let anecdote of anecdotes) {
		if (votes[anecdote]) {
			votes[anecdote] += 1;
		} else {
			votes[anecdote] = 0;
		}
	}

	const [selected, setSelected] = useState(0);
	const [voteState, setVoteState] = useState(votes);

	function handleOnNextAnecdote() {
		let random = Math.floor(Math.random() * anecdotes.length);
		setSelected(random);
	}

	function handleOnVote() {
		let newVotesState = Object.assign({}, voteState);
		let anecdote = anecdotes[selected];
		newVotesState[anecdote] += 1;
		setVoteState(newVotesState);
	}

	function findMostVoted() {
		let voteCount = 0;
		let mostVoted;
		for (let vote in voteState) {
			if (voteState[vote] > voteCount) {
				mostVoted = vote;
				voteCount = voteState[vote];
			}
		}

		return mostVoted;
	}

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<p>{anecdotes[selected]}</p>
			<p>has {voteState[anecdotes[selected]]} votes</p>
			<button onClick={handleOnNextAnecdote}>Next anecdote</button>
			<button onClick={handleOnVote}>vote</button>
			<h2>Most voted anecdote</h2>
			<p>{findMostVoted()}</p>
		</div>
	);
};

export default App;
