
import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  useEffect(() => {
    socket.emit("join_room", 1);
  }, [socket]);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
