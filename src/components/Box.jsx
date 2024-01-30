import { useState } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

function Box({ id, toggle, setToggle, data, setData }) {
  const [source, setSource] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      return "";
    } else {
      if (toggle) {
        setData(() => {
          let demo = { ...data };
          demo[id] = "circle";
          return demo;
        });
        setSource(circle);
        setClicked(true);
        setToggle(!toggle);
      } else {
        setData(() => {
          let demo = { ...data };
          demo[id] = "cross";
          return demo;
        });
        setSource(cross);
        setClicked(true);
        setToggle(!toggle);
      }
    }
  };

  return (
    <div className="box" id={id} onClick={handleClick}>
      <img src={source} />
    </div>
  );
}

export default Box;
