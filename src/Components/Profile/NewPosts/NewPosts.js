import React from "react";
import x from './NewPosts.module.css';
import Comments from "./Post/Comments";

const NewPosts = (props) => {

    let NewCommentArea = React.createRef();

    let AddComment = () => {
        let text = NewCommentArea.current.value;
        props.AddComment(text)
    };

    let OnChangeText = () => {
        let text = NewCommentArea.current.value;
        props.UpTextArea(text);
    }

    let Profiles = props.state.comments
        .map(p => <Comments avatar={p.img} message={p.massage} like={p.like}/>);

    return (
        <div className={x.posts_list}>
            <div>
                <h3>New Post</h3>
                <div><textarea ref={NewCommentArea}
                               onChange={OnChangeText}
                                value={props.state.UpdateTextArea}/></div>
                <div>

                    <button onClick={AddComment}>Add Post</button>
                </div>
            </div>
            <div className={x.comments}>
                {Profiles}

            </div>
        </div>
    );
}
export default NewPosts;