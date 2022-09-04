import x from './Profile.module.css';
import NewPosts from "./NewPosts/NewPosts";
import Description from "./Description/Description";

const Profile = (props) => {

    return (
        <div className={x.content}>
            <Description/>
            <NewPosts state={props.state}
                      AddComment={props.AddComment}
                      UpTextArea={props.UpTextArea}/>
        </div>
    );
}
export default Profile;