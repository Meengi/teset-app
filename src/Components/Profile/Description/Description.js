import x from './Description.module.css';

const Description = () => {
    return (
        <div className={x.user_profile}>
            <div className={x.banner}>
                <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/profile-cover.jpg" alt=""/>
            </div>
            <div className={x.profiles_content}>
                <div className={x.profile_avatar}>
                    <div className={x.profile_avatar_holder}>
                        <img src='http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg'/>
                    </div>
                </div>
                <div className={x.profile_info}>
                    <h1>Pavel Ladbrook</h1>
                    <p>Moscow, Russia, World</p>
                </div>
            </div>
            <div className={x.description}></div>
        </div>
    );
}
export default Description;