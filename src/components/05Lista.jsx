import React from "react";

function Lista(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Lista;