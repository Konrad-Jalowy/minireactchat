function Messages({messages}){
    console.log(messages)
    return (<ul>
        {messages.map((msg) => {
            return <li>{msg.name}:{msg.message}</li>
        })}

    </ul>);
};

export {Messages};