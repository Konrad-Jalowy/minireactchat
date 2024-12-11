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

    let user_joined = false;
    if(name !== null){
        user_joined = true;
    }

    return (<>
    {(!user_joined) && <EnterName socket={socket} setName={setName}/>}
    {(user_joined) && <p>Your name: {name}</p>}
    <UsrNumber socket={socket} />
    <UsrNames socket={socket} />
    <Messages messages={messages} />
    {(user_joined) && <SendMessage socket={socket}/>}
    </>
    );
};

export {MessagesController};