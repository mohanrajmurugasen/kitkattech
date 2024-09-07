import React, { useState } from "react";
import TrainingItems from "../Data/Training";
import "./Training.css";
import { Link } from "react-router-dom";

const TrainingDropdown = () => {
  const [serclick, setSerClick] = useState(false);

  const handleClick = () => setSerClick(!serclick);

  return (
    <>
      <ul
        onClick={handleClick}
        className={serclick ? "drop_down_cont clicked" : "drop_down_cont"}
      >
        {TrainingItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setSerClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrainingDropdown;
