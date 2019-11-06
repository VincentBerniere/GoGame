import React from "react";
import { Point } from "./Point";

export const Line = (props) => {
    const getContent = () => {
        return props.points.map(point => { return <Point key={point.position} {...point} /> });
    }

    return(
        <div className="line">
            {getContent()}
        </div>
    );
};