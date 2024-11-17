import { projects } from "../../assets/data/project"

export function Sidebar({ onSelect, selected }) {

    return (
        <div className="sidebar-card">
            <text className="sidebar-header">Project list</text>
            <dl class="sidebar-column">
                {projects.map((project) => {
                    return (
                        <div class="sidebar-item" onClick={() => onSelect(`project.${project.id}`)} style={{ cursor: "pointer" }}>
                            {project.name}
                        </div>
                    )
                })
                }
            </dl>
        </div>
    )
}