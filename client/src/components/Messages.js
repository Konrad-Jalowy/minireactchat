import { useState, useEffect } from "react";

function Messages({messages}){
    return (<ul>
        {messages.map((msg) => {
            return <li>{msg}</li>
        })}

    </ul>);
};

export {Messages};