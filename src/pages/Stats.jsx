import { MdCode } from "react-icons/md";
import { PiSuitcaseBold } from "react-icons/pi";
import { FiGitPullRequest } from "react-icons/fi";
import { useEffect, useState } from "react";

function getExperience() {
    // Convert the input dates to JavaScript Date objects
    const start = new Date("11/08/2021");
    const end = new Date();

    // Calculate the total year difference
    let yearDiff = end.getFullYear() - start.getFullYear();

    // Calculate the total month difference
    let monthDiff = end.getMonth() - start.getMonth();

    // Adjust the year and month difference if the end month is less than the start month
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff };
}

const statsDetails = {
    "experience": {
        display: "Experience",
        icon: <PiSuitcaseBold height="25px" width="25px"/>
    },
    "projects": {
        display: "Projects",
        icon: <FiGitPullRequest />
    },
    "leetcode": {
        display: "Leetcode qns",
        icon: <MdCode />
    }
}

const experience = getExperience()
statsDetails.experience["value"] = `${experience.years}y${experience.months}m`

export default function Stats() {

    const [stats, setStats] = useState(statsDetails);

    useEffect(()=>{
        // fetch("https://alfa-leetcode-api.onrender.com/adarshsuresh07/solved").then((response)=>{
        //     response.json().then((data)=>{
        //         setStats((prev)=>{
        //             console.log(data)
        //             prev.leetcode["value"] = data.solvedProblem;
        //             return prev;
        //         })
        //     })
        // })
    },[])

    return (
        <>
            {Object.values(stats).map((details, index) => {
                return(
                <div key={index} className="column outline">
                    <div className="stats-icon">{details.icon}</div>
                    <div className="text">{details.display}</div>
                    <div className="text">{details.value ?? "--"}</div>
                </div>)
            })}
        </>
    )
}