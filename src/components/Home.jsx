import React, { useState, useEffect } from "react";
import Box from "./Box";
import { useNavigate } from "react-router-dom";

function Home() {
	const [toggle, setToggle] = useState(true);
	const [data, setData] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const isCircle = isOver("circle");
		const isCross = isOver("cross");

		if (isCircle) {
			navigate(`/gameover/circle`);
		}

		if (isCross) {
			navigate(`/gameover/cross`);
		}

		if (Object.keys(data).length === 9 && !isCircle && !isCross) {
			navigate("gameover/draw");
		}
	}, [data]);

	function isOver(obb) {
		if (data[1] === obb && data[2] === obb && data[3] === obb) {
			return true;
		} else if (data[4] === obb && data[5] === obb && data[6] === obb) {
			return true;
		} else if (data[7] === obb && data[8] === obb && data[9] === obb) {
			return true;
		} else if (data[1] === obb && data[4] === obb && data[7] === obb) {
			return true;
		} else if (data[2] === obb && data[5] === obb && data[8] === obb) {
			return true;
		} else if (data[3] === obb && data[6] === obb && data[9] === obb) {
			return true;
		} else if (data[1] === obb && data[5] === obb && data[9] === obb) {
			return true;
		} else if (data[3] === obb && data[5] === obb && data[7] === obb) {
			return true;
		} else {
			return false;
		}
	}

	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className="game">
			<h1>Tic tac toe</h1>
			<div className="info">
				<p>Player 1 : Circle</p>
				<p>Player 2 : Cross</p>
			</div>
			<div className="parent">
				{arr.map((item) => {
					return (
						<Box
							id={item}
							key={item}
							toggle={toggle}
							setToggle={setToggle}
							data={data}
							setData={setData}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
