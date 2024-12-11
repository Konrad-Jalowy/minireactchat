import { useState } from "react";

function SendMessage({socket}){
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        socket.emit("send_message", {message});
      };

    return (
    <><input
    placeholder="Message..."
    onChange={(event) => {
      setMessage(event.target.value);
    }}
    />
  <button onClick={sendMessage}> Send Message</button>
    </>
    );
};

export {SendMessage};