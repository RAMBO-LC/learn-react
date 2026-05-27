import type { MouseEvent } from 'react' ;

function ListGroup() {
	let names = ["raj", "didi1", "didi2", "mummy", "papa"];

    const eventHandler = (event: MouseEvent) => console.log(event)
	const getMsg = () => {
		return names.length === 0 && <p>No NAMES found</p>;
	};

	return (
		<>
			<h1>HEADING</h1>
			{/*we cant use 'if-statements here', 
            only exception is braces {}
            */}
			{getMsg()}
			<ul className="list-group">
				{names.map((name, index) => (
					<li
						key={name}
						onClick={eventHandler}
						className="list-group-item"
					>
						{name}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
