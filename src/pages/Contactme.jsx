import { MdEmail, MdCode, MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const contacts = [{
    label: "Github",
    value: "adarshsuresh07",
    icon: <FaGithub />,
    href: "https://github.com/adarshsuresh07"
}, {
    label: "Leetcode",
    value: "adarshsuresh07",
    icon: <MdCode />,
    href: "https://leetcode.com/u/adarshsuresh07"
}, {
    label: "Email",
    value: "adarshsuresh.dev@gmail.com",
    icon: <MdEmail />,
    href: "mailto:contact@email.co.uk"
}, {
    label: "Linkedin",
    value: "adarshsuresh07",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/adarshsuresh07"
}]

export default function ContactMe() {
    return (
        <div className="column padding-container" style={{ justifyContent: "unset" }}>
            <div className="row" style={{ justifyContent: "space-between", fontSize: "28px", height: "fit-content" }}>
                <div>Let's connect!</div>
                <MdArrowOutward />
            </div>
            <dl className="contact-list contact-list--flex">
                {contacts.map((contact, index) => {
                    return <ContactRow key={index} contact={contact} />
                })
                }
            </dl>
        </div>
    )
}

export function ContactRow({ contact }) {
    return (
        <div className="contact-list__item">
            <dt className="sr-only">{contact.label}</dt>
            <dd>
                <a href={contact.href} className="c-icon-button c-icon-button--right" target="_blank" rel="noopener noreferrer">
                    <span className="c-icon-button__detail">{contact.value}</span>
                    <span className="c-icon-button__icon c-icon-button__icon--right">
                        {contact.icon}
                    </span>
                </a>
            </dd>
        </div>
    )
}