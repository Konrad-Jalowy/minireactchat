function Messages({messages}){
    return (<ul>
        {messages.map((msg) => {
            return <li><strong>{msg.name}</strong> says:{msg.message}</li>
        })}

    </ul>);
};

export {Messages};