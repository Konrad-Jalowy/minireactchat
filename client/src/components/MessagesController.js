import { useState, useEffect } from "react";
import { Messages } from "./Messages";
import { EnterName } from "./EnterName";
import { UsrNames } from "./UsrNames";
import { UsrNumber } from "./UsrNumber";

function MessagesController({socket}){
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(null);
    return (<>
    {(name === null) && <EnterName socket={socket}/>}
    <UsrNumber socket={socket} />
    <UsrNames socket={socket} />
    <Messages messages={messages} />
    </>
    );
};

export {MessagesController};