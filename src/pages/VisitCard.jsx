import { MdArrowOutward } from "react-icons/md";

const visitDetails = {
    "home": {
        label: "Download my Resume",
        link: "https://github.com/adarshsuresh07"
    },
    "project": {
        label: "Visit my Github",
        link: "https://github.com/adarshsuresh07"
    },
    "experience": {
        label: "Visit my Linkedin",
        link: "https://www.linkedin.com/in/adarshsuresh07"
    }
}

export default function VisitCard({ page }) {
    const visitData = visitDetails[page];

    return (
            <div className="row padding-container visit-card" style={{ fontSize: "26px", cursor:"pointer" }} onClick={() => window.open(visitData.link, "_blank")}>
                <div style={{ fontSize: "18px" }}>{visitData.label}</div>
                <MdArrowOutward />
            </div>
    )
}