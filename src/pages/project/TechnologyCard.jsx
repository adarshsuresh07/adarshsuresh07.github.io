export default function TechnologyCard({ project }) {
    return (
        <div className="padding-container stack-container">
            {
                project.stacks_used.map((stack) => {
                    return <TechnologyItem technology={stack} />
                })
            }
            <text className="stack-header">Stack used</text>
        </div>
    )
}

function TechnologyItem({ technology }) {
    return (
        <div className="stack" title={technology.name}>
            <div style={{fontSize:"24px"}}>
                {technology.icon}
            </div>
            <text style={{ textAlign:"center"}}>
                {technology.name}
            </text>
            <text style={{ textAlign:"center"}}>
                ({technology.context})
            </text>
        </div>
    )
}