import { useState, useEffect } from "react";
import { Messages } from "./Messages";
import { EnterName } from "./EnterName";

function MessagesController({socket}){
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(null);
    return (<>
    {(name === null) && <EnterName socket={socket}/>}
    <Messages messages={messages} />
    </>
    );
};

export {MessagesController};