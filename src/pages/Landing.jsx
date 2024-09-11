import Sukuna from "../assets/img/pink2.jpg"
import Header from "./Header"
import Aboutme from "./Aboutme"
import Stats from "./Stats"
import OneLiner from "./OneLiner"
import ContactMe from "./Contactme"
import { useState } from "react"
import SubPageFlipCard from "./SubPageFlipCard"


const card1 = {
    "home": <OneLiner />,
    "project1": <p>project 1</p>,
    "project2": <p>project 2</p>,
    "project3": <p>project 3</p>,
    "experience": <p>experience</p>
}
const card2 = {
    "home": <img src={Sukuna} alt="Adarsh" />,
    "project1": <p>project 1</p>,
    "project2": <p>project 2</p>,
    "project3": <p>project 3</p>,
    "experience": <p>experience</p>
}
const card3 = {
    "home": <Aboutme />,
    "project1": <p>project 1</p>,
    "project2": <p>project 2</p>,
    "project3": <p>project 3</p>,
    "experience": <p>experience</p>
}
const card4 = {
    "home": <>
        <p>Have some questions?</p>
        <a href="#">Contact me</a></>,
    "project1": <p>project 1</p>,
    "project2": <p>project 2</p>,
    "project3": <p>project 3</p>,
    "experience": <p>experience</p>
}

function getSubPageIfExist(page) {
    const pages = page.split(".");
    return pages.length > 1 ? pages[1] : pages[0];
}

export default function Landing() {
    const [isPageFlipped, setIsPageFlipped] = useState(false);
    const [isSubPageFlipped, setIsSubPageFlipped] = useState(false);
    const [selectedPage, setSelectedPage] = useState("home");

    function setPage(page) {
        if (selectedPage === page)
            return;
        setIsPageFlipped((prev) => !prev);
        setSelectedPage(page);
    }

    function setSubPage(page) {
        if (selectedPage === page)
            return;
        setIsSubPageFlipped((prev) => !prev);
        setSelectedPage(page);
    }

    const card5 = {
        "home": <ContactMe />,
        "project": <div>
            <p onClick={() => setSubPage("project.project1")}>project 1</p>
            <p onClick={() => setSubPage("project.project2")}>project 2</p>
            <p onClick={() => setSubPage("project.project3")}>project 3</p>
        </div>,
        "experience": <p>experience</p>,
    }

    return (
        <main className="container">
            <main className="grid-container">
                <main className="grid-row" style={{ '--row-height': '10%' }}>
                    <Header onClick={setPage} />
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
                        <main className="grid-row" style={{ '--row-height': '85%' }}>
                            <SubPageFlipCard
                                content={card5[selectedPage.split(".")[0]]}
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