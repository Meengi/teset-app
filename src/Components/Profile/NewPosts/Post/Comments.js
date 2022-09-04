import x from './Comments.module.css';
import * as Icon from 'react-feather';

const Comments = (props) => {
    return (
        <div className={x.post}>
            <div className={x.post_ava}>
            <img src={props.avatar} alt=""/>
            </div>
            <div>
                <div className={x.comment}>
                    <p>
                        <span className={x.comment_txt}>{props.message}</span>
                    </p>
                    <div className={x.triangle}></div>
                </div>
                <div className={x.bottom_items}>
                    <a className={x.uil_heart} href="#">
                        <i className={x.svg_heart}><Icon.Heart /></i>
                        <span className={x.like}>Like</span>
                    </a>
                    <a className={x.replay} href="#">
                        <span>Replay</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Comments;