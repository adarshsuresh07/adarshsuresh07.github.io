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
        let timeout  = null;
        if (isFlipped) {
            setFront(content);
            timeout = setTimeout(() => setBack(content), 700);
            setIsFlipped((prev) => !prev);
        } else {
            setBack(content);
            timeout = setTimeout(() => setFront(content), 700);
            setIsFlipped((prev) => !prev);
        }
        return ()=>{
            clearTimeout(timeout);
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