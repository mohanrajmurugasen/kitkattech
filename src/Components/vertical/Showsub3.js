import React from "react";
import TrainingItems from "../Data/Training";
import "./Showsub3.css";
import { Link } from "react-router-dom";

const MediaTrainingDropdown = ({
  isOpenicon3,
  setIsOpenicon3,
  showsub3,
  handleClose,
}) => {
  return (
    <>
      <ul
        className={isOpenicon3 ? "drop_down_cont_media" : "none"}
        onClick={showsub3}
      >
        {TrainingItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="drop_down_cont_media"
                to={item.path}
                onClick={() => {
                  setIsOpenicon3(!isOpenicon3);
                  handleClose();
                }}
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

export default MediaTrainingDropdown;
