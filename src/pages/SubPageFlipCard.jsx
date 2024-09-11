import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

export default function SubPageFlipCard({
    isPageFlipped,
    isSubPageFlipped,
    content,
    additionalClasses = "",
    frontPadding,
    backPadding,
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [front, setFront] = useState(<></>);
    const [back, setBack] = useState(<></>);

    useEffect(() => {
        if (isFlipped) {
            setFront(content);
            setTimeout(() => setBack(content), 700);
            setIsFlipped((prev) => !prev);
        } else {
            setBack(content);
            setTimeout(() => setFront(content), 700);
            setIsFlipped((prev) => !prev);

        }
    }, [isSubPageFlipped, isPageFlipped])

    return (
        <FlipCard
            isFlipped={isFlipped}
            front={front}
            back={back}
            additionalClasses={additionalClasses}
            frontPadding={frontPadding}
            backPadding={backPadding}
        />
    )
}