import React from "react";

export const Stone = (props) => {
    return(
        <span className={ props.hover ? 'stone hover' : 'stone' }>
        </span>
    );
};