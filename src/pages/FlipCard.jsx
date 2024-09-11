export default function FlipCard({
    isFlipped,
    front,
    back,
    additionalClasses = "",
    frontPadding,
    backPadding,
}) {
    
    const classNameFlip = `card ${isFlipped ? 'flipped' : ''}`;

    return (
        <section className={classNameFlip + additionalClasses}>
            <div style={{ width: "100%", height: "100%", position:"relative", boxSizing:"border-box" }}>
                <div className="flip-card flip-card-front"  style={{"--card-padding": frontPadding}}>
                    {front}
                </div>
                <div className="flip-card flip-card-back" style={{"--card-padding": backPadding}}>
                    {back}
                </div>
            </div>
        </section>
    )
}