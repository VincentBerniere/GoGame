import React, { useState } from "react";
import { Stone } from "./Stone";

export const Point = () => {
    const [hasStone, setHasStone] = useState(false);
    const [displayStone, setDisplayStone] = useState(false);

    const dropAStone = () => {
        setHasStone(true);
    }

    const handleMouseOver = () => {
        setDisplayStone(true);
    }

    const handleMouseLeave = () => {
        setDisplayStone(false);
    }

    const getContent = () => {
        if (hasStone) {
            return <Stone />;
        }

        return displayStone ? <Stone hover="true" /> : '';
    }

    return (
        <div className="point">
            <div className="intersection" onClick={dropAStone} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                {getContent()}
            </div>
        </div>
    );
};