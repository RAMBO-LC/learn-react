import { useState } from "react";
//interface
interface Props {
    names:string[],
    Heading:string,
}
function ListGroup({names, Heading} : Props) {
    //useState() is a  Hook
    const [slctIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{Heading}</h1>
			{/*we cant use 'if-statements here', 
            only exception is braces {}
            */}
			<ul className="list-group">
				{names.map((name, index) => (
					<li
						key={name}
                        onClick={() => setSelectedIndex(index)}
                        
						className={
							slctIndex === index ? "list-group-item active" : "list-group-item"
						}
					>
						{name}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
