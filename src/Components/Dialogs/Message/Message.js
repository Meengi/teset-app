import x from "./Message.module.css";

const MessageItem = (props)=> {
    return (
        <div className={x.message}>{props.message}</div>
    );
};

export default MessageItem;