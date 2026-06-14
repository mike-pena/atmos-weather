import { useEffect, useRef, useState } from "react";
import "./BackgroundManager.css";

function Background({ video, isDay }) {
  
    const themeModifier = isDay ? "background__fade_theme_day" : "background__fade_theme_night";

  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);

  if (!video) return null;

  const src = `${import.meta.env.BASE_URL}videos/${video}`;

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let fading = false;

    const handleTimeUpdate = () => {
      if (!video.duration || fading) return;

      const remaining = video.duration - video.currentTime;

      if (remaining <= 0.8) {
        fading = true;
        setFade(true);
      }
    };

    const handleSeeked = () => {
      // El video volvió al inicio
      setTimeout(() => {
        setFade(false);
        fading = false;
      }, 50);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [src]);

  return (
    <div className="background">
      <video
        ref={videoRef}
        key={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="background__video"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        className={`background__fade ${themeModifier} ${
          fade ? "background__fade--visible" : ""
        }`}
      />
    </div>
  );
}

export default Background;
