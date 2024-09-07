import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import MediaProductDropdown from "./Showsub1";
import MediaServiceDropdown from "./Showsub2";
import MediaTrainingDropdown from "./Showsub3";

const Nav = ({ isOpen, setIsOpen, shownav, onClose }) => {
  const [isOpenicon1, setIsOpenicon1] = useState(false);
  const [isOpenicon2, setIsOpenicon2] = useState(false);
  const [isOpenicon3, setIsOpenicon3] = useState(false);

  const [clickicon1, setClickicon1] = useState(false);
  const [clickicon2, setClickicon2] = useState(false);
  const [clickicon3, setClickicon3] = useState(false);
  const handleicon1 = () => {
    setClickicon1(!clickicon1);
  };
  const handleicon2 = () => {
    setClickicon2(!clickicon2);
  };
  const handleicon3 = () => {
    setClickicon3(!clickicon3);
  };

  const showsub1 = (e) => {
    e.preventDefault();

    setIsOpenicon1(!isOpenicon1);
  };
  const showsub2 = (e) => {
    e.preventDefault();

    setIsOpenicon2(!isOpenicon2);
  };
  const showsub3 = (e) => {
    e.preventDefault();

    setIsOpenicon3(!isOpenicon3);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div>
        <div className="nav_content_list_media">
          <Link to="/Home" className="list_ref_media  active" onClick={onClose}>
            Home
          </Link>
        </div>
        <div
          className="nav_content_list_media1"
          id="down"
          onClick={handleicon1}
        >
          <Link to="/" className="list_ref_media" style={{ color: "#ff635e" }}>
            Products
          </Link>

          <i
            className={clickicon1 ? "fa fa-caret-up" : "fa fa-caret-down"}
            onClick={showsub1}
          />
          {clickicon1 && (
            <MediaProductDropdown
              isOpenicon1={isOpenicon1}
              setIsOpenicon1={setIsOpenicon1}
              showsub1={showsub1}
              handleClose={handleClose}
            />
          )}
        </div>
        <div
          className="nav_content_list_media1"
          id="down1"
          onClick={handleicon2}
        >
          <Link to="/" className="list_ref_media" style={{ color: "#ff635e" }}>
            Services
          </Link>

          <i
            className={clickicon2 ? "fa fa-caret-up" : "fa fa-caret-down"}
            onClick={showsub2}
          />
          {clickicon2 && (
            <MediaServiceDropdown
              isOpenicon2={isOpenicon2}
              setIsOpenicon2={setIsOpenicon2}
              showsub={showsub2}
              handleClose={handleClose}
            />
          )}
        </div>

        <div
          className="nav_content_list_media1"
          id="down1"
          onClick={handleicon3}
        >
          <Link
            to="/TrainingPage"
            className="list_ref_media"
            style={{ color: "#ff635e" }}
          >
            Training
          </Link>

          <i
            className={clickicon3 ? "fa fa-caret-up" : "fa fa-caret-down"}
            onClick={showsub3}
          />
          {clickicon3 && (
            <MediaTrainingDropdown
              isOpenicon3={isOpenicon3}
              setIsOpenicon3={setIsOpenicon3}
              showsub3={showsub3}
              handleClose={handleClose}
            />
          )}
        </div>

        <div className="nav_content_list_media">
          <Link to="/AboutPage" className="list_ref_media" onClick={onClose}>
            About
          </Link>
        </div>
        <div className="nav_content_list_media">
          <Link to="/CareerPage" className="list_ref_media" onClick={onClose}>
            Career
          </Link>
        </div>
        <div className="nav_content_list_media">
          <Link to="/ContactPage" className="list_ref_media" onClick={onClose}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
export default Nav;
