import React from "react";
import x from './Dialogs.module.css';
import DialogItem from './DialogProfile/DialogProfile'
import MessageItem from './Message/Message'
import {AddComment} from "../../State";

const Dialogs = (props) => {
let NewMessageArea = React.createRef();

    let AddMessage = () => {
        let text = NewMessageArea.current.value;
        alert(text)
    };

    let DialogsProfile = props.state.profiles
        .map(d => <DialogItem id={d.id} name={d.name} lastContent={d.lastContent} img={d.img}/>);

    let Messages = props.state.messages
        .map(m => <MessageItem message={m.message}/>);

    return (
        <div className={x.dialogs}>
            <div className={x.dialog_item}>
                {DialogsProfile}
            </div>
            <div className={x.messages}>
                {Messages}
                <div>
                    <textarea ref={NewMessageArea}></textarea>
                    <button onClick={AddMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;