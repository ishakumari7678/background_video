import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (loading) return <Preloader />;

  return (
    <div className="app">
      <video ref={videoRef} autoPlay muted loop className="bg-video">
        <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <h1>Prodesk IT</h1>
        <button className="toggle-btn" onClick={toggleVideo}>
          <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
