import { projects } from "../../assets/data/project"

export function Sidebar({ onSelect }) {

    return (
        <column className="padding-container" style={{ justifyContent: "unset" }}>
            <row style={{ justifyContent: "space-between", fontSize: "28px", height: "fit-content" }}>
                <text>Project list</text>
                {/* <MdArrowOutward /> */}
            </row>
            <dl class="contact-list contact-list--flex">
                {projects.map((project) => {
                    return (
                        <div class="contact-list__item" onClick={() => onSelect(`project.${project.id}`)} style={{ cursor: "pointer" }}>
                            {project.name}
                        </div>
                    )
                })
                }
            </dl>
        </column>
    )
}