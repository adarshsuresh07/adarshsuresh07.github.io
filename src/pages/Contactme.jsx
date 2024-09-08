import { MdEmail, MdPhone, MdCode } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [{
    label: "Email",
    value: "adarshsuresh.dev@gmail.com",
    icon: <MdEmail />,
    href: "mailto:contact@email.co.uk"
}, {
    label: "Call",
    value: "+919207676309",
    icon: <MdPhone />,
    href: "tel:+919207676309"
}, {
    label: "Linkedin",
    value: "adarshsuresh07",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/adarshsuresh07"
}, {
    label: "Github",
    value: "adarshsuresh07",
    icon: <FaGithub />,
    href: "https://github.com/adarshsuresh07"
}, {
    label: "Leetcode",
    value: "adarshsuresh07",
    icon: <MdCode />,
    href: "https://leetcode.com/u/adarshsuresh07"
}]

export default function ContactMe() {
    return (
        <dl class="contact-list contact-list--flex">
            {contacts.map((contact) => {
                return (
                    <div class="contact-list__item">
                        <dt class="sr-only">{contact.label}</dt>
                        <dd>
                            <a href={contact.href} class="c-icon-button c-icon-button--right">
                                <span class="c-icon-button__detail">{contact.value}</span>
                                <span class="c-icon-button__icon c-icon-button__icon--right">
                                    {contact.icon}
                                </span>
                            </a>
                        </dd>
                    </div>
                )
            })
            }
        </dl>
    )
}