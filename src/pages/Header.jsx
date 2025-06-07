import { themeProps } from "../assets/constants"

export default function Header({ onPageClick, selectedTheme, selectTheme }) {

    const themes = Object.values(themeProps).filter((theme) => theme.id !== selectedTheme);
    themes.splice(1,0,themeProps[selectedTheme]);

    return (
        <header className="header-card" style={{ '--card-width': '100%' }}>
            <div className="row" style={{ width: "fit-content" }}>
                <div className="avatars">
                    {themes.map(({ id, img, themeColor }, index) => {
                        return <div key={index} className="avatars__item" onClick={() => selectTheme(id)} style={{ "--avatar-theme-color": themeColor }}><img className="avatar" src={img} alt={id} /></div>
                    })}
                </div>
                <div className="name">Adarsh S</div>
            </div>
            <div className="row" style={{ width: "fit-content" }}>
                <span className="nav-link" onClick={() => onPageClick("home")}>Home</span>
                <span className="nav-link" onClick={() => onPageClick("project")}>Projects</span>
                <span className="nav-link" onClick={() => onPageClick("experience")}>Experience</span>
            </div>
        </header>
    )
}