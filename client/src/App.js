
import './App.css';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  socket.emit("join_room", 1);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
