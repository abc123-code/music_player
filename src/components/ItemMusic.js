import { MoreHorizontal } from "feather-icons-react";
import React, { useState } from "react";
import "./ItemMusic.css";

const ItemMusic = ({
  imgLink,
  nameSong,
  nameSinger,
  handleGetDataFromItem,
  checked,
}) => {
  const [choose] = useState(null);

  const handleClick = () => {
    handleGetDataFromItem();
    return choose;
  };

  return (
    <div
      className={checked === true ? "itemMusicTrue" : "itemMusicFalse"}
      onClick={() => {
        handleClick();
      }}
    >
      <div className="bodySong">
        <img src={imgLink} alt="" className="imgItem" />
        <div className="inforOfSong">
          <div className="nameSong"> {nameSong} </div>
          <div className="nameSinger">{nameSinger}</div>
        </div>
      </div>
      <div className="iconthreeDot">
        <MoreHorizontal size={30} />
      </div>
    </div>
  );
};

export default ItemMusic;
