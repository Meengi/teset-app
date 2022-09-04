import {NavLink} from "react-router-dom";
import x from "./DialogProfile.module.css";

const DialogItem = (props)=> {
    return (
        <NavLink to={'/messages/' + props.id} className={x.dialog}>
            <div className={x.dialog_photo}>
                <div className={x.dialog_photo_item}>
                    <div className={x.dpi_w}>
                        <div className={x.img_dialog_photo}>
                            <div className={x.img_grid}>
                                <img
                                    src={props.img}
                                    width="50" height="50" data-alt={props.name}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={x.dialog_content}>
                <div className={x.dialog_cw}>
                    <div className={x.dialog_title}>
                        <div className={x.dialog_name}>{props.name}</div>
                        <div className={x.dialog_pmass}>{props.lastContent}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;