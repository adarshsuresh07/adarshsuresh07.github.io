import {themePhotos} from "../assets/constants"

export default function Header({ onPageClick, selectedTheme, selectTheme }) {
    return (
        <header class="header-card" style={{ '--card-width': '100%' }}>
            <row style={{ width: "fit-content" }}>
                <div class="avatars">
                    {Object.values(themePhotos).sort((a, _) => a.id === selectedTheme ? -1 : 1).map(({ id, img }) => {
                        return <div class="avatars__item" onClick={()=>selectTheme(id)}><img class="avatar" src={img} alt={id} /></div>
                    })}
                </div>
                <name>Adarsh S</name>
            </row>
            <row style={{ width: "fit-content" }}>
                <a href="#" onClick={() => onPageClick("home")}>Home</a>
                <a href="#" onClick={() => onPageClick("project.project1")}>Projects</a>
                <a href="#" onClick={() => onPageClick("experience")}>Experience</a>
            </row>
        </header>
    )
}