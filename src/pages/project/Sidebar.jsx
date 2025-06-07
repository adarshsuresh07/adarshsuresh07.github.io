import { projects } from "../../assets/data/project"

export function Sidebar({ onSelect, selected }) {

    return (
        <div className="sidebar">
            <div className="sidebar-title">
                Projects
            </div>
            <div className="sidebar-items">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => onSelect(`project.${project.id}`)}
                        className="sidebar-item"
                    >
                        <div className="item-title">
                            {project.name}
                        </div>
                        <div className="item-subtitle">
                            {project.key_points.length} key features
                        </div>
                        <div className="item-meta">
                            {project.stacks_used.length} technologies
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}