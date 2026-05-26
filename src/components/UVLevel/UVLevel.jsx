import "./UVLevel.css";

const levels = ["Low", "Moderate", "High", "Very High", "Extreme"];

function UVLevel({ currentLevel }) {
    
    return (
        <div className="uv-levels">
            <div className="uv-level-labels">
                {levels.map((level) => (
                    <div
                    key={level}
                    className={`uv-label ${
                        currentLevel === level ? "selected" : ""
                    }`}
                    >
                    {level}
                    </div>
                ))}
            </div>
            <div className="uv-level-colors">
                <div style={{backgroundColor: "green"}}></div>
                <div style={{backgroundColor: "yellow"}}></div>
                <div style={{backgroundColor: "orange"}}></div>
                <div style={{backgroundColor: "red"}}></div>
                <div style={{backgroundColor: "purple"}}></div>
            </div>
        </div>
    );
}

export default UVLevel;