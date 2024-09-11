export default function Header({onClick}) {

    return (
        <header class="header-card" style={{ '--card-width': '100%' }}>
            <name>Adarsh S</name>
            <row style={{width:"fit-content"}}>
                <a href="#" onClick={()=>onClick("home")}>Home</a>
                <a href="#" onClick={()=>onClick("project.project1")}>Projects</a>
                <a href="#" onClick={()=>onClick("experience")}>Experience</a>
            </row>
        </header>
    )
}