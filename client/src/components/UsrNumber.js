import { useEffect, useState } from "react";

function UsrNumber({socket}){
    const [usrNum, setUsrNum] = useState(1);
    return (
        <><p>Number of users: {usrNum}</p></>
    );
};

export {UsrNumber};