import { BiLogoReact, BiLogoTypescript, BiLogoPython, BiLogoFlask } from "react-icons/bi";
import { SiRedux } from "react-icons/si";

export const fullTimeExperience = [{
    id: "inflection",
    company: "Inflection.io",
    role: "Software Engineer II",
    start_date: new Date("2021-08-11"),
    end_date: null,
    location: "Kochi, India",
    key_points: [
        "Spearheaded the development and expansion of sophisticated features for a responsive B2B marketing and customer communication platform.",
        "Leveraged React.js and TypeScript for the frontend and Python Flask for the backend.",
        "Established and upheld code quality standards by introducing automated code linting and providing mentorship to junior team members",
        "Implemented Redux Toolkit for streamlined state management and crafted multiple HOCs to enhance code reusability and maintain code standards",
        "Utilized Reactflow and elkjs libraries for frontend and DiGraph for backend to create user-specific workflows, featuring a graphical visual editor",
        "Integrated Codemirror to enhance code editing capabilities and incorporated the BEE SDK for advanced visual email template editing"
    ],
    stacks_used: [
        {
            icon: <BiLogoReact />,
            name: "React.js",
            context: "Frontend"
        },
        {
            icon: <BiLogoTypescript />,
            name: "TypeScript",
            context: "Frontend"
        },
        {
            icon: <BiLogoPython />,
            name: "Python",
            context: "Backend"
        },
        {
            icon: <BiLogoFlask />,
            name: "Flask",
            context: "Backend"
        },
        {
            icon: <SiRedux />,
            name: "Redux Toolkit",
            context: "State Management"
        }
    ]
}]

export const freeLanceExperience = [{
    id: "freshfarmzone",
    company: "Fresh Farm Zone",
    role: "Frontend developer",
    start_date: new Date("2021-03-11"),
    end_date: new Date("2021-05-11"),
    location: "Remote",
    key_points: [
        "Developed React pages for a react native mobile application for connecting rural farmers to urban consumers"
    ],
    stacks_used: [
        {
            icon: <BiLogoReact />,
            name: "React.js",
            context: "Frontend"
        }
    ]
}, {
    id: "delopus",
    company: "Delopus",
    role: "Frontend developer",
    start_date: new Date("2020-06-11"),
    end_date: new Date("2021-03-11"),
    location: "Remote",
    link: "https://delopus.com",
    key_points: [
        "Developed a web platform MVP for the architecture community",
        "Implemented user and admin dashboard functionalities like create, update and interactions with architecture designs from scratch"
    ],
    stacks_used: [
        {
            icon: <BiLogoReact />,
            name: "React.js",
            context: "Frontend"
        }
    ]
}, {
    id: "pden",
    company: "Pden",
    role: "Frontend developer",
    start_date: new Date("2020-11-11"),
    end_date: new Date("2021-02-11"),
    location: "Remote",
    key_points: [
        "Developed decentralized social media platform for Blockstack network",
        "Built six decentralised applications in react.js for Blockstack during the internship period"
    ],
    stacks_used: [
        {
            icon: <BiLogoReact />,
            name: "React.js",
            context: "Frontend"
        }
    ]
}, {
    id: "gilabs",
    company: "GiLabs",
    role: "Frontend developer",
    start_date: new Date("2020-07-11"),
    end_date: new Date("2020-08-11"),
    location: "Remote",
    key_points: [
        "Developed fully functional web interface in React.js for a civic data mapping model",
        "The platform enables users to attempt survey, policy makers to gather analysis and government departments to get alerted"
    ],
    stacks_used: [
        {
            icon: <BiLogoReact />,
            name: "React.js",
            context: "Frontend"
        }
    ]
}]

// Combine all experiences for easier access
export const allExperiences = [...fullTimeExperience, ...freeLanceExperience]