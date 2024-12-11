function Messages({messages}){
    return (<ul>
        {messages.map((msg) => {
            const _time = new Date(msg.time);
            let _h = `${_time.getHours()}`.padStart(2, "0");
            let _m = `${_time.getMinutes()}`.padStart(2, "0");
            let _s = `${_time.getSeconds()}`.padStart(2, "0");
            const formattedTime = `${_h}:${_m}:${_s}`;
            return <li key={_time}><strong>({formattedTime}) {msg.name}</strong> says:{msg.message}</li>
        })}

    </ul>);
};

export {Messages};