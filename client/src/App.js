
import './App.css';
import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import {Messages} from "./components/Messages";
import { UsrNumber } from './components/UsrNumber';


function App() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  const socket = useRef(null);
  if(socket.current === null){
    socket.current = io.connect("http://localhost:3001");
  }

  useEffect(() => {
    socket.current.on("receive_message", (data) => {
      setMessageReceived(prev => [...prev, data.message]);
    });
  }, [socket]);

  console.log(messageReceived);

  const sendMessage = () => {
    socket.current.emit("send_message", { message, room:1 });
  };
  
  return (
    <div className="App">
      <UsrNumber socket={socket.current}/>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      { messageReceived.length > 0 && <Messages messages={messageReceived}/>}
    </div>
  );
}

export default App;
