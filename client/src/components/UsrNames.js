import { useEffect, useState } from "react";

function UsrNames({socket}){
    const [names, setNames] = useState("none");
    useEffect(() => {
        socket.on("user-names-change", function(names){
            let namesStr;
            if(names.length === 0){
                namesStr = "none"
            } else {
                namesStr = names.join(", ");
            }
            setNames(namesStr);
        });
    }, [socket]);
    return (<><p>Users names: {names}</p></>);
};

export {UsrNames};