import logo from "./logo.svg";
import "./App.css";
import DisplayMusic from "./components/DisplayMusic";
import ItemMusic from "./components/ItemMusic";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [listSongs, setListSongs] = useState([]);
  const [nameNewSong, setNameNewSong] = useState(null);
  const [imgNewSong, setImgNewSong] = useState(null);

  const [indexCurrent, setIndexCurrent] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/songs");
        setListSongs(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    console.log(listSongs);

    setImgNewSong(listSongs[1]?.image);
    setNameNewSong(listSongs[1]?.name);
  }, []);

  const handleGetDataFromItem = (indexNew) => {
    setImgNewSong(listSongs[indexCurrent]?.image);
    setNameNewSong(listSongs[indexCurrent]?.name);
    setIndexCurrent(indexNew);
  };

  return (
    <div className="App">
      <div className="mainBody">
        <DisplayMusic imgLink={imgNewSong} nameSong={nameNewSong} />
        {listSongs.map((song, index) => (
          <ItemMusic
            key={song.id}
            imgLink={song.image}
            nameSong={song.name}
            nameSinger={song.singer}
            handleGetDataFromItem={() => {
              handleGetDataFromItem(song.id);
            }}
            checked={song.id === indexCurrent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
