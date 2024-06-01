/* eslint-disable */
import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [facingMode, setFacingMode] = useState("user");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current as unknown as HTMLVideoElement;
    const constraints = {
      audio: false,
      video: {
        facingMode: facingMode,
      },
    };

    video.style.width = "400px";
    video.style.height = "400px";
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function success(stream) {
        video.srcObject = stream;
      });
  }, [facingMode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <video ref={videoRef} />
      <button
        style={{ background: "black" }}
        onClick={() => {
          if (facingMode === "user") {
            setFacingMode("environment");
          } else {
            setFacingMode("user");
          }
        }}
      >
        Change Camera
      </button>
      <button style={{ background: "maroon" }}>Stop Camera</button>
    </div>
  );
}

export default App;
