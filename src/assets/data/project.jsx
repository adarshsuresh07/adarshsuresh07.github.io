import { BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoUnity, BiLogoBlender } from "react-icons/bi";
import { TbFileTypeSql } from "react-icons/tb";

export const projects = [{
    id: "labvr",
    name: "LabVR",
    link: "https://github.com/adarshsuresh07/VRlab-web",
    key_points: [
        "Virtual Lab for Remote Learning: VRlab allows students to conduct virtual experiments, simulating real-world laboratory settings. This is particularly useful for students unable to access physical labs due to various constraints, such as the COVID-19 pandemic.",
        "Teacher-Student Interaction: The system provides a platform for teachers to create lab sessions, distribute unique session keys to students, and monitor their progress and results remotely, ensuring an interactive learning experience.",
        "Hands-On VR Experience: The project includes a virtual reality component where students perform experiments in a virtual lab. Examples include experiments on Hooke’s Law and the Simple Pendulum, using virtual apparatus to gather data and submit results.",
        "User Authentication and Dashboards: Both teachers and students have dedicated dashboards. Teachers can manage sessions and assess student performance, while students can log in to perform experiments and view their session history.",
    ],
    screenshots: [
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/Signup.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/Teacherdash.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/start1.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/key2.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/ep1.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/ep2.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/labvr9.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/labvr8.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/labvr6.png",
        "https://raw.githubusercontent.com/adarshsuresh07/VRlab-web/master/Screenshots/studdash2.png",
    ],
    stacks_used: [{
        icon: <BiLogoReact />,
        name: "Reactjs",
        context: "Frontend"
    }, {
        icon: <BiLogoNodejs />,
        name: "Nodejs",
        context: "Backend"
    }, {
        icon: <BiLogoMongodb />,
        name: "MongoDB",
        context: "Database"
    }, {
        icon: <BiLogoUnity />,
        name: "Unity",
        context: "VR app"
    }, {
        icon: <BiLogoBlender />,
        name: "Blender",
        context: "3D-models"
    }]
}, {
    id: "notified",
    name: "Notified",
    link: "https://github.com/adarshsuresh07/Notified",
    key_points: [
        "Collaborative Platform for Career Opportunities: Developed a web application that allows students to collaboratively manage and share career opportunities, fostering a community-driven approach to job hunting and career tracking.",
        "Opportunity Stack Management: Implemented an efficient system for managing career opportunities, allowing users to categorize opportunities into stacks like 'Todo', 'Applied' and 'Expired' with options for both personal and global management.",
        "Automated Notifications: Designed a notification system that informs users of new opportunities, automating the process of staying updated without manually checking for changes.",
        "Search and Filtering Functionality: Integrated advanced search and filtering tools that allow users to quickly find relevant opportunities based on keywords and filters, improving usability and navigation.",
    ],
    screenshots: [],
    stacks_used: [{
        icon: <BiLogoReact />,
        name: "Reactjs",
        context: "Frontend"
    }, {
        icon: <BiLogoNodejs />,
        name: "Nodejs",
        context: "Backend"
    }, {
        icon: <BiLogoMongodb />,
        name: "MongoDB",
        context: "Database"
    }]
}, {
    id: "feepayment",
    name: "FeePayment",
    link: "https://github.com/adarshsuresh07/FeePayment",
    key_points: [
        "Comprehensive User Roles: The system includes distinct user roles for both students and admins. Students can log in, reset their passwords, pay fees online, and receive digital receipts, while admins manage the backend by adding new students, handling offline payments, and resetting student credentials.",
        "Online Payment Integration: A key feature is the integration with Stripe for secure online payments. The platform supports real-time fee transactions with a test mode to validate the process, ensuring secure and accurate fee management.",
        "Admin Dashboard with Advanced Filtering: The admin panel allows searching and filtering students based on criteria such as name, semester, department, fee status, and scholarship eligibility, providing a streamlined method for tracking payments and student information.",
        "Automated Payment Receipts: The system automatically sends payment receipts to students via email, adding an additional layer of documentation and convenience for both students and administrative staff."
    ],
    screenshots: [
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/loginstudent.jpg",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/studentdash.png",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/confirmation.png",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/pay.png",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/receipt.png",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/searchsem.png",
        "https://github.com/adarshsuresh07/FeePayment/raw/master/Screenshots/log.png",
    ],
    stacks_used: [{
        icon: <BiLogoReact />,
        name: "Reactjs",
        context: "Frontend"
    }, {
        icon: <BiLogoNodejs />,
        name: "Nodejs",
        context: "Backend"
    }, {
        icon: <TbFileTypeSql />,
        name: "SQL",
        context: "Database"
    }]
}]