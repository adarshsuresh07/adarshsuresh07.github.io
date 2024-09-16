import { themeProps } from "../assets/constants"

export default function Header({ onPageClick, selectedTheme, selectTheme }) {

    const themes = Object.values(themeProps).filter((theme) => theme.id !== selectedTheme);
    themes.splice(1,0,themeProps[selectedTheme]);

    return (
        <header class="header-card" style={{ '--card-width': '100%' }}>
            <row style={{ width: "fit-content" }}>
                <div class="avatars">
                    {themes.map(({ id, img, themeColor }) => {
                        return <div class="avatars__item" onClick={() => selectTheme(id)} style={{ "--avatar-theme-color": themeColor }}><img class="avatar" src={img} alt={id} /></div>
                    })}
                </div>
                <name>Adarsh S</name>
            </row>
            <row style={{ width: "fit-content" }}>
                <a href="#" onClick={() => onPageClick("home")}>Home</a>
                <a href="#" onClick={() => onPageClick("project.labvr")}>Projects</a>
                <a href="#" onClick={() => onPageClick("experience")}>Experience</a>
            </row>
        </header>
    )
}