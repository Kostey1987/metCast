import React, { useRef, useState } from "react";
import { Box, IconButton, Slider, Typography, styled } from "@mui/material";
import { PlayArrow, Pause, VolumeUp } from "@mui/icons-material";

const tracks = [
  {
    title: "Track1",
    src: "./electricDreams.mp3",
  },
];

const PurpleVolumeUp = styled(VolumeUp)({
  color: "#8A2BE2",
  textShadow: "0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 20px #8A2BE2",
});

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));

  React.useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlayPause = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  };

  const handleTrackChange = (index) => {
    audioRef.current.pause();
    audioRef.current = new Audio(tracks[index].src);
    setCurrentTrackIndex(index);
    if (playing) {
      audioRef.current.play();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        mt={2}
        style={{
          fontFamily: '"Jersey 15", sans-serif',
          color: "#ff69b4",
          textShadow:
            "0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4",
        }}
      >
        CyberWave Music Player
      </Typography>
      <IconButton onClick={handlePlayPause} sx={{ marginBottom: 2 }}>
        {playing ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Box sx={{ width: 200 }}>
        <PurpleVolumeUp />
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
        />
      </Box>
      {/* <Box sx={{ marginTop: 2 }}>
          {tracks.map((track, index) => (
            <Typography
              key={index}
              onClick={() => handleTrackChange(index)}
              style={{
                cursor: "pointer",
                color: currentTrackIndex === index ? "#ff69b4" : "inherit",
              }}
            >
              {track.title}
            </Typography>
          ))}
        </Box> */}
    </Box>
  );
};

export default MusicPlayer;
