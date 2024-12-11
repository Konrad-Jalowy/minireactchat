import { useRef } from "react";
function EnterName({socket}){
    const ipt = useRef(null);

    function onSubmitHandler(e){
        e.preventDefault();
        if(ipt.current.value === "")
            return;
        alert("submited");
        return true;
    }
    return (
    <form onSubmit={onSubmitHandler}>
    <label htmlFor="iptName">Enter your name:</label>
    <input ref={ipt} type="text" id="iptName" name="username"/>
    <input type="submit" value="enter" />
    </form>
    );
};

export {EnterName};