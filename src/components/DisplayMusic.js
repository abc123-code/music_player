import React from "react";
import "./DisplayMusic.css";
import {
  RotateCw,
  Repeat,
  SkipBack,
  SkipForward,
  PlayCircle,
} from "feather-icons-react";
import imgA1 from "../images/HaiMuoiHai.jpg";
import AudioPlayer from "./AudioPlayer";
const DisplayMusic = ({ imgLink, nameSong }) => {
  return (
    <div className="displayMusic">
      <div className="titleName">
        <h4>Now playing</h4>
        <h2>{nameSong}</h2>
        <img src={imgLink} className="imgSong" alt="" />
      </div>
      {/* <div className="iconClickMusic">
        <RotateCw size={22} />
        <SkipBack size={22} />
        <PlayCircle size={40} className="iconPlayCircle" />
        <SkipForward size={22} />
        <Repeat size={22} />
      </div> */}
      {/* <div className="progressSong">
        <progress value={50} max="100" style={{ width: "100%" }} />
      </div> */}
      <AudioPlayer />
    </div>
  );
};

export default DisplayMusic;
