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
          ? "Winner is Player 2"
          : result === "circle"
          ? "Winner is Player 1"
          : "Draw Game."}
      </h1>
      <Link className="link" to="/">
        <p>Wanna play again.</p>
      </Link>
    </div>
  );
}

export default GameOver;
