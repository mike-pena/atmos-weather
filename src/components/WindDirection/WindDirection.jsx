import "./WindDirection.css";

function WindDirection({ direction, isDay }) {

    const themeModifier = isDay
    ? "wind-compass_theme_day"
    : "wind-compass_theme_night";
    
    return (
        <div className={`wind-compass ${themeModifier}`}>
            <span className="wind-compass__label wind-compass__label_n">N</span>
            <span className="wind-compass__label wind-compass__label_e">E</span>
            <span className="wind-compass__label wind-compass__label_s">S</span>
            <span className="wind-compass__label wind-compass__label_w">W</span>

            <div
                className="wind-compass__arrow"
                style={{
                transform: `translate(-50%, -50%) rotate(${direction}deg)`,
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" viewBox="0 0 525.87 120.08">
                    <g id="Capa_1-2" data-name="Capa 1">
                        <path fill="currentColor" d="M456.56,116.85c-16.01-13.63,8.35-25.54,18.58-43.1l-463.66-.28c-8.91,0-12.35-10-11.3-15.22,1.59-7.91,7.08-12.29,16.42-12.29h459.87s-21.11-22.4-21.11-22.4c-5.42-5.76-4.1-13.45-.45-18.35,3.69-4.97,13.88-7.49,18.97-2.48l47.03,46.19c5.36,5.26,7.09,14.76,1.55,20.32l-46.6,46.79c-5.41,5.43-14.28,5.09-19.3.82Z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default WindDirection;