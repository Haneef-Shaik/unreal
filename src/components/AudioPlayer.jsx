import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const PlayCircleOutlineIcon = () => (<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.2545" cy="20.8216" r="20.2018" fill="#502D87" fill-opacity="0.1"/>
<circle cx="20.2545" cy="20.8216" r="19.2018" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
<path d="M26.708 19.9705C27.292 20.3498 27.292 21.2047 26.708 21.584L17.8922 27.31C17.2523 27.7257 16.4062 27.2664 16.4062 26.5033L16.4063 15.0512C16.4063 14.2881 17.2523 13.8288 17.8922 14.2445L26.708 19.9705Z" fill="white"/>
</svg>
)

const PauseCircleOutlineIcon = () => (<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.2545" cy="20.8216" r="20.2018" fill="#502D87" fill-opacity="0.1"/>
<circle cx="20.2545" cy="20.8216" r="19.2018" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
<rect x="14.4824" y="13.1257" width="3.84795" height="15.3918" rx="1.92398" fill="white"/>
<rect x="22.1782" y="13.1257" width="3.84795" height="15.3918" rx="1.92398" fill="white"/>
</svg>
)

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#FFFFFF50",
  progressColor: "#FFFFFF",
  cursorColor: "rgba(255,255,255,0)",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 38,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function AudioPlayer({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const rem = useRef(0)
  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
        var totalTime = wavesurfer.current.getDuration(),
          currentTime = wavesurfer.current.getCurrentTime(),
          remainingTime = totalTime - currentTime;
        document.getElementById('remainingTime').innerText = ` ${ (Math.floor(remainingTime / 60))?.toFixed(0) } : ${ String( "0" + (remainingTime % 60)?.toFixed(0))?.slice(-2) }`;
      }
    });

    wavesurfer.current.on("audioprocess", function () {
      if (wavesurfer.current.isPlaying()) {
        var totalTime = wavesurfer.current.getDuration(),
          currentTime = wavesurfer.current.getCurrentTime(),
          remainingTime = totalTime - currentTime;
          document.getElementById('remainingTime').innerText = ` ${(remainingTime / 60)?.toFixed(0) } : ${ String( "0" + (remainingTime % 60)?.toFixed(0))?.slice(-2) }`;
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
    
      <div
      className="p-1 rounded-full flex items-center gap-1"
        style={{
          width: "max-content",
          background: "linear-gradient(85deg, #F17CD0 -62.64%, #6749CD 96.33%)",
          
        }}
      >
        <img
          src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"}
            height="41px"
            width="41px"
            alt="#"
          style={{
            aspectRatio:"1/1",
            borderRadius: "50%",
            backgroundSize:"contain",
          }}
        />
        <div id="waveform" ref={waveformRef} style={{ minWidth: "40vw" }}></div>
        <div onClick={handlePlayPause} className="flex items-center gap-1 text-white" > <span className="text-sm font-medium "  id="remainingTime" ></span> {!playing ? <PlayCircleOutlineIcon fontSize="large" sx={{color:"#FFF"}}  /> : <PauseCircleOutlineIcon />} </div>
      </div>
    </div>
  );
}
