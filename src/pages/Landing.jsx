import Header from "./Header"
import Aboutme from "./Aboutme"
import Stats from "./Stats"
import OneLiner from "./OneLiner"
import ContactMe from "./Contactme"
import { useState } from "react"
import SubPageFlipCard from "./SubPageFlipCard"
import { themeProps } from "../assets/constants"
import { Sidebar } from "./project/Sidebar"
import { projects } from "../assets/data/project"
import KeyNote from "./project/Keynote"
import VisitCard from "./VisitCard"
import TechnologyCard from "./project/TechnologyCard"
import Carousel from "../components/Carousel"

const card1 = {
    "home": <OneLiner />,
    "experience": <p>experience</p>
}

const card3 = {
    "home": <Aboutme />,
    "experience": <p>experience</p>
}


const card4 = {
    "home": <>
        <p>Have some questions?</p>
        <a href="#">Contact me</a></>,
    [projects[0].id]: <Carousel />,
    [projects[1].id]: <p>project 2</p>,
    [projects[2].id]: <p>project 3</p>,
    "experience": <p>experience</p>
}

const card6 = {
    "home": <VisitCard page={"home"} />,
    "project": <VisitCard page={"project"} />,
    "experience": <VisitCard page={"experience"} />
}

projects.forEach((project) => {
    card1[project.id] = <KeyNote label={project.name} keyNotes={project.key_points} />
    card3[project.id] = <TechnologyCard project={project} />
    card4[project.id] = <Carousel slides={project.screenshots} />
})

function getSubPageIfExist(page) {
    const pages = page.split(".");
    return pages.length > 1 ? pages[1] : pages[0];
}

export default function Landing() {
    const [isPageFlipped, setIsPageFlipped] = useState(false);
    const [isSubPageFlipped, setIsSubPageFlipped] = useState(false);
    const [selectedPage, setSelectedPage] = useState("home");
    const [selectedTheme, selectTheme] = useState("pink");

    function setPage(page) {
        setSelectedPage((prevPage) => {
            if (prevPage === page)
                return prevPage;
            setIsPageFlipped((prev) => !prev);
            return page;
        });
    }

    function setTheme(theme) {
        selectTheme((prevTheme) => {
            if (prevTheme === theme)
                return prevTheme;
            setIsPageFlipped((prev) => !prev);
            return theme;
        });
    }

    function setSubPage(page) {
        setSelectedPage((prevPage) => {
            if (prevPage === page)
                return prevPage;
            setIsSubPageFlipped((prev) => !prev);
            return page;
        });
    }

    const card2 = {
        "home": <img src={themeProps[selectedTheme].img} alt="Adarsh" style={{ margin: "2px" }} />,
        "experience": <p>experience</p>
    }

    projects.forEach((project) => {
        card2[project.id] = <></>
    })

    const card5 = {
        "home": <ContactMe />,
        "project": <Sidebar onSelect={setSubPage} />,
        "experience": <p>experience</p>,
    }

    return (
        <main className="container" style={themeProps[selectedTheme].theme}>
            <main className="grid-container">
                <main className="grid-row" style={{ '--row-height': '10%' }}>
                    <Header onPageClick={setPage} selectedTheme={selectedTheme} selectTheme={setTheme} />
                </main>
                <main className="grid-row" style={{ '--row-height': '90%' }}>
                    <main className="grid-col">
                        <main className="grid-row" style={{ '--row-height': '60%' }}>
                            <main className="grid-col" style={{ "--col-width": '70%' }}>
                                <SubPageFlipCard
                                    content={card1[getSubPageIfExist(selectedPage)]}
                                    isPageFlipped={isPageFlipped}
                                    isSubPageFlipped={isSubPageFlipped}
                                />
                            </main>
                            <main className="grid-col" style={{ "--col-width": '30%' }}>
                                <SubPageFlipCard
                                    content={card2[getSubPageIfExist(selectedPage)]}
                                    isPageFlipped={isPageFlipped}
                                    isSubPageFlipped={isSubPageFlipped}
                                />
                            </main>
                        </main>
                        <main className="grid-row" style={{ '--row-height': '40%' }}>
                            <main className="grid-col" style={{ "--col-width": '50%' }}>
                                <SubPageFlipCard
                                    content={card3[getSubPageIfExist(selectedPage)]}
                                    isPageFlipped={isPageFlipped}
                                    isSubPageFlipped={isSubPageFlipped}
                                />
                            </main>
                            <main className="grid-col" style={{ "--col-width": '50%' }}>
                                <SubPageFlipCard
                                    content={card4[getSubPageIfExist(selectedPage)]}
                                    isPageFlipped={isPageFlipped}
                                    isSubPageFlipped={isSubPageFlipped}
                                />
                            </main>
                        </main>
                    </main>
                    <main className="grid-col" style={{ '--col-width': '35%' }}>
                        <main className="grid-row" style={{ '--row-height': '70%' }}>
                            <SubPageFlipCard
                                content={card5[selectedPage.split(".")[0]]}
                                isPageFlipped={isPageFlipped}
                                isSubPageFlipped={false}
                            />
                        </main>
                        <main className="grid-row" style={{ '--row-height': '15%' }}>
                            <SubPageFlipCard
                                content={card6[selectedPage.split(".")[0]]}
                                isPageFlipped={isPageFlipped}
                                isSubPageFlipped={false}
                            />
                        </main>
                        <main className="grid-row" style={{ '--row-height': '15%' }}>
                            <row>
                                <Stats />
                            </row>
                        </main>
                    </main>
                </main>
            </main>
        </main>
    )
}