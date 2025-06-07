export default function ExperienceTechnologyCard({ experience }) {
    return (
        <div className="padding-container stack-container">
            {
                experience.stacks_used.map((stack, index) => {
                    return <ExperienceTechnologyItem key={index} technology={stack} />
                })
            }
            <div className="text stack-header">Stack used</div>
        </div>
    )
}

function ExperienceTechnologyItem({ technology }) {
    return (
        <div className="stack" title={technology.name}>
            <div style={{fontSize:"24px"}}>
                {technology.icon}
            </div>
            <div className="text" style={{ textAlign:"center"}}>
                {technology.name}
            </div>
            <div className="text" style={{ textAlign:"center"}}>
                ({technology.context})
            </div>
        </div>
    )
} 