export default function ExperienceKeynote({ label, keyNotes }) {
    return (
        <div className="padding-container">
            <div className="text" style={{fontSize: "24px", fontWeight:"600"}}>{label}</div>
            <ul>
                {keyNotes.map((note, index) => {
                    return (
                        <li key={index}>
                            {note}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
} 