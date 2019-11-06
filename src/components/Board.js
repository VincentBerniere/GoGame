import React from "react";
import './Board.scss';
import constants from '../constants';
import { Line } from './Line';

export const Board = () => {
    const getLines = () => {
        const lines = [];

        for (let i = 1; i <= constants.NB_LINES; i++) {
            const points = [];

            for (let j = 1; j <= constants.NB_POINTS; j++) {
                points.push({ position: j });
            }

            lines.push({ position: i, points });
        }

        return lines;
    }

    const getContent = () => {
        const lines = getLines();
        
        return lines.map(line => { return <Line key={line.position} {...line} /> });
    }

    return (
        <div className="board">
            {getContent()}
        </div>
    );
};