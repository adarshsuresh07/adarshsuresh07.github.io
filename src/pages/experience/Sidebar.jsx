import { fullTimeExperience, freeLanceExperience } from "../../assets/data/experience.jsx"

export function ExperienceSidebar({ onSelect }) {
    const formatDate = (date) => {
        if (!date) return "Present";
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
        });
    };

    const renderExperienceSection = (experiences, title) => (
        <div className="sidebar-section">
            <div className="sidebar-title">
                {title}
            </div>
            <div className="sidebar-items">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        onClick={() => onSelect(`experience.${exp.id}`)}
                        className="sidebar-item"
                    >
                        <div className="item-title">
                            {exp.company}
                        </div>
                        <div className="item-subtitle">
                            {exp.role}
                        </div>
                        <div className="item-meta">
                            {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="sidebar">
            {renderExperienceSection(fullTimeExperience, "Full-time")}
            {renderExperienceSection(freeLanceExperience, "Freelance")}
        </div>
    )
} 