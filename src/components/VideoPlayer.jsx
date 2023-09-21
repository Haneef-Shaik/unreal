import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function VideoPlayer() {

    const vidRef = useRef(null);
    const [isPlaying,setIsPlaning]  = useState(false)


    const handlePlayVideo = () => {
      vidRef.current.play();
      setIsPlaning(true)
    }

    const handlePauseVideo = () => {
        vidRef.current.pause()
        setIsPlaning(false)
      }

      const handeToggelVideo =()=>{
        if(isPlaying)
        {
            vidRef.current.pause()

        }
        else{
      vidRef.current.play();

        }

        setIsPlaning((prev)=>(!prev))
    }


    useEffect(()=>{
        const video = document.querySelector("video");
video.addEventListener("pause", (event) => {
    handlePauseVideo();
    })},[])

  return <div className="h-[200px] relative" > 
  
  <video ref={vidRef} controls={isPlaying}  className={`${isPlaying ? "z-20" : "z-10"} rounded-xl h-full absolute overflow-hidden`} onClick={()=>handeToggelVideo()} >
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
    </video>

    <div className={` ${ !isPlaying ? "z-30" : "z-10"} h-full w-full absolute rounded-xl`}>
  <div className="h-full w-full bg-[#00000030] z-10 rounded-xl flex items-center justify-center">
  { 
    <PlayCircleIcon onClick={handlePlayVideo} sx={{color:"white"}} fontSize="large"  />
  }
  </div>
  <div className="absolute bottom-4 px-2 text-white font-semibold text-xl text-left" >
  Step design sprint for beginner
  </div>
  <div>
  </div>
    </div>
</div>
}
