import "./BackgroundManager.css";

function Background({ video }) {

    if (!video) return null;
    
    const src = `${import.meta.env.BASE_URL}videos/${video}`;

    return (
        <div className="background">
            <video
            key={src}
            autoPlay
            loop
            muted
            playsInline
            className="background__video"
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}

export default Background;