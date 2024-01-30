import React from "react";
import { Link, useParams } from "react-router-dom";

function GameOver() {
  const { result } = useParams();
  return (
    <div className="gameover">
      <h1>Game over</h1>
      <h1>Game completed successfully.</h1>
      <h1>
        {result === "cross"
          ? "Winner is Cross"
          : result === "circle"
          ? "Winner is Circle"
          : "Draw Game."}
      </h1>
      <Link to="/">
        <h1>Wanna play again.</h1>
      </Link>
    </div>
  );
}

export default GameOver;
