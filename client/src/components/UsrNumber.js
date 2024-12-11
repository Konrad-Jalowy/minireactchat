import { useEffect, useState } from "react";

function UsrNumber({socket}){
    const [usrNum, setUsrNum] = useState(1);
    useEffect(() => {
        socket.on("users-number-change", function(user_number){
            setUsrNum(user_number);
        });
    }, [socket]);
    return (
        <><p>Number of users: {usrNum}</p></>
    );
};

export {UsrNumber};