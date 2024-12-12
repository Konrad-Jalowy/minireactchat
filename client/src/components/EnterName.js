import { useRef } from "react";
function EnterName({socket, setName}){
    const ipt = useRef(null);

    function onSubmitHandler(e){
        e.preventDefault();
        if(ipt.current.value === "")
            return;
        socket.emit("new-user", ipt.current.value);
        setName(ipt.current.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          onSubmitHandler(event);
        }
      }

    return (
    <form onSubmit={onSubmitHandler}>
    <div className="form-row">
    <label htmlFor="iptName">Enter your name:</label>
    <input ref={ipt} type="text" id="iptName" name="username" onKeyDown={handleKeyDown}/>
    </div>
    
    <input type="submit" value="enter" />
    </form>
    );
};

export {EnterName};