import { useState } from "react";
import "./App.css";

function App() {
	const [state, setState] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [createTask, setCreateTask] = useState(false);
	const Header = () => {
		return <h1>TODO APP</h1>;
	};
	const Modal = () => {
		const [text, setText] = useState("");
		const [date, setDate] = useState("");
		const [color, setColor] = useState("");
		return (
			<div>
				<input
					type="text"
					autoFocus
					onChange={(e) => setText(e.target.value)}
				/>
				<input type="date" onChange={(e) => setDate(e.target.value)} />
				<input
					type="color"
					value="#ffffff"
					onChange={(e) => setColor(e.target.value)}
				/>
				<button
					onClick={() => {
						const newTask = { text, date, color };
						setTasks([...tasks, newTask]);
						setCreateTask(!createTask);
						setState(!state);
					}}
				>
					Confirm
				</button>
			</div>
		);
	};
	const AddTaskBtn = () => {
		return (
			<>
				<button
					onClick={() => {
						setState(!state);
					}}
				>
					Add Task
				</button>
			</>
		);
	};
	const Body = () => {
		return <div>{state && <Modal></Modal>}</div>;
	};
	return (
		<div className="main">
			<Header></Header>
			<AddTaskBtn></AddTaskBtn>
			<Body></Body>
			<div>
				<ul>
					{tasks.map((task, index) => (
						<li
							key={index}
							style={{ backgroundColor: task.color, border: "1px solid black" }}
						>
							<button
								onClick={() => {
									const updatedTasks = [...tasks];
									updatedTasks.splice(index, 1);
									setTasks(updatedTasks);
									// console.log(...tasks);
								}}
							>
								DONE
							</button>
							{task.text}
							<br />
							{task.date}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
