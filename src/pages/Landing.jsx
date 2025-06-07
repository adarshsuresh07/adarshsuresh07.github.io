import Header from "./Header"
import Aboutme from "./Aboutme"
import Stats from "./Stats"
import OneLiner from "./OneLiner"
import ContactMe from "./Contactme"
import { useState, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import SubPageFlipCard from "./SubPageFlipCard"
import { themeProps } from "../assets/constants"
import { Sidebar } from "./project/Sidebar"
import { projects } from "../assets/data/project"
import KeyNote from "./project/Keynote"
import VisitCard from "./VisitCard"
import TechnologyCard from "./project/TechnologyCard"
import Carousel from "../components/Carousel"
import { ExperienceSidebar } from "./experience/Sidebar"
import { allExperiences } from "../assets/data/experience.jsx"
import ExperienceKeynote from "./experience/Keynote"
import ExperienceTechnologyCard from "./experience/TechnologyCard"

const card1 = {
    "home": <OneLiner />
}

const card3 = {
    "home": <Aboutme />
}

const card4 = {
    "home": <>
        <p>Have some questions?</p>
        <a href="#">Contact me</a></>,
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

allExperiences.forEach((experience) => {
    card1[experience.id] = <ExperienceKeynote label={`${experience.company} - ${experience.role}`} keyNotes={experience.key_points} />
    card3[experience.id] = <ExperienceTechnologyCard experience={experience} />
    card4[experience.id] = <></>
})

function getSubPageIfExist(page) {
    const pages = page.split(".");
    return pages.length > 1 ? pages[1] : pages[0];
}

export default function Landing() {
    const { projectId, experienceId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [isPageFlipped, setIsPageFlipped] = useState(false);
    const [isSubPageFlipped, setIsSubPageFlipped] = useState(false);
    const [selectedTheme, selectTheme] = useState("pink");
    const [previousPage, setPreviousPage] = useState("");

    const getCurrentPage = () => {
        const path = location.pathname;
        if (path === '/' || path === '/home') return 'home';
        if (path.startsWith('/project/')) return `project.${projectId}`;
        if (path.startsWith('/experience/')) return `experience.${experienceId}`;
        return path;
    };

    const selectedPage = getCurrentPage();

    useEffect(() => {
        const currentPage = selectedPage;
        const currentMainPage = currentPage.split('.')[0];
        const previousMainPage = previousPage.split('.')[0];
        
        if (previousPage && currentPage !== previousPage) {
            if (currentMainPage === previousMainPage) {
                setIsSubPageFlipped(prev => !prev);
            } else {
                setIsPageFlipped(prev => !prev);
            }
        }
        setPreviousPage(currentPage);
    }, [selectedPage]);

    function setPage(page) {
        if (page === 'project') {
            navigate(`/project/${projects[0].id}`);
        } else if (page === 'experience') {
            navigate(`/experience/${allExperiences[0].id}`);
        } else {
            navigate(`/${page}`);
        }
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
        const urlPath = page.replace('.', '/');
        navigate(`/${urlPath}`);
    }

    const card2 = {
        "home": <img src={themeProps[selectedTheme].img} alt="Adarsh" style={{ margin: "2px" }} />
    }

    projects.forEach((project) => {
        card2[project.id] = <></>
    })

    allExperiences.forEach((experience) => {
        card2[experience.id] = <></>
    })

    const card5 = {
        "home": <ContactMe />,
        "project": <Sidebar onSelect={setSubPage} />,
        "experience": <ExperienceSidebar onSelect={setSubPage} />
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
                            <div className="row">
                                <Stats />
                            </div>
                        </main>
                    </main>
                </main>
            </main>
        </main>
    )
}