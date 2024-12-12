import { useState, useRef } from "react";

function SendMessage({socket}){
    const [message, setMessage] = useState("");
    const iptRef = useRef(null);

    const sendMessage = () => {
        if(iptRef.current.value === "")
            return;
        iptRef.current.value = "";
        socket.emit("send_message", message);
      };

    return (
    <div className="send-message">
    <input
    ref={iptRef}
    placeholder="Message..."
    onChange={(event) => {
      setMessage(event.target.value);
    }}
    />
    <button onClick={sendMessage}> Send Message</button>
    </div>
    );
};

export {SendMessage};