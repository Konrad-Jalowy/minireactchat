import { useState, useEffect } from "react";
import { Messages } from "./Messages";
import { EnterName } from "./EnterName";
import { UsrNames } from "./UsrNames";
import { UsrNumber } from "./UsrNumber";
import { SendMessage } from "./SendMessage";

function MessagesController({socket}){
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(null);

    useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessages(prev => [...prev, data.message]);
        });
      }, [socket]);

    return (<>
    {(name === null) && <EnterName socket={socket} setName={setName}/>}
    {(name !== null) && <p>Your name: {name}</p>}
    <UsrNumber socket={socket} />
    <UsrNames socket={socket} />
    <Messages messages={messages} />
    {(name !== null) && <SendMessage socket={socket}/>}
    </>
    );
};

export {MessagesController};