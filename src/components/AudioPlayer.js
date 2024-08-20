import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioUrl =
    "https://drive.google.com/file/d/1E8KZGQzAK_p4oMZWF-smjBIJZ6jw1wMy/preview"; // Đường dẫn tương đối tới file MP3 trong thư mục public

  useEffect(() => {
    const audioElement = audioRef.current;
    console.log(audioElement.duration + " ??? ");

    const updateProgress = () => {
      setProgress((audioElement.currentTime / audioElement.duration) * 100);
    };

    const onLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener("timeupdate", updateProgress);
    audioElement.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
      audioElement.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  const handleProgressClick = (e) => {
    const audioElement = audioRef.current;
    const clickX = e.nativeEvent.offsetX;
    const width = e.target.clientWidth;
    const newTime = (clickX / width) * audioElement.duration;
    audioElement.currentTime = newTime;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://github.com/abc123-code/music_assets/raw/main/Th%C3%A1ng%203%20c%E1%BB%A7a%20anh.mp3"
        controls
        style={{ display: "hidden" }}
      ></audio>

      <div
        style={{
          height: "10px",
          width: "100%",
          backgroundColor: "#ddd",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={handleProgressClick}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#007bff",
          }}
        ></div>
      </div>
      <div>{`Time: ${Math.floor((progress / 100) * duration)}s / ${Math.floor(
        duration
      )}s`}</div>
    </div>
  );
};

export default AudioPlayer;
