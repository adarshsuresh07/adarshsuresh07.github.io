export default function KeyNoteCard({ label, keyNotes }) {
    return (
        <div className="padding-container">
            <text style={{fontSize: "24px", fontWeight:"600"}}>{label}</text>
            <ul>
                {keyNotes.map((note) => {
                    return (
                        <li>
                            {note}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}