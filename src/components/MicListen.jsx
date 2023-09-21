import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// Reference: https://www.loginradius.com/blog/async/quick-look-at-react-speech-recognition/

export function MicListen() {
  const [message, messageSet] = useState("");
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening
  } = useSpeechRecognition({
    commands: [
      {
        command: "reset",
        callback: () => resetTranscript()
      },
      {
        command: "shut up",
        callback: () => messageSet("I wasn't talking.")
      },
      {
        command: "Hello",
        callback: () => messageSet("Hi there!")
      }
    ]
  });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  useEffect(()=>{
    console.log(listening)
  },[listening])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
    return null;
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: false,
      language: "en"
    });
  };

  const [isClient, setIsClient] = useState(false)
 
  useEffect(()=>{
    console.info(transcript)
  },[transcript])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <div>
      <div>
        <div>
          {/* <button type="button" onClick={resetTranscript}>
            Reset
          </button> */}
          
          <div 
          style={{
            background:"linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)",
          }}
          className=" flex items-center justify-center rounded-full p-2 w-min" 
          onClick={()=> {if(listening){
             SpeechRecognition.stopListening()
          }
          else
          { 
            listenContinuously()
          }}
          }>
            <GraphicEqIcon fontSize="large" sx={{color:"#FFF"}} />
          </div>
        </div>
      </div>
      {/* <div>{message}</div>
      <div>
        <span>{transcript}</span>
      </div> */}
    </div>
  ) : <></>
}
