export default function TechnologyCard({ project }) {
    return (
        <div className="padding-container stack-container">
            {
                project.stacks_used.map((stack, index) => {
                    return <TechnologyItem key={index} technology={stack} />
                })
            }
            <div className="text stack-header">Stack used</div>
        </div>
    )
}

function TechnologyItem({ technology }) {
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