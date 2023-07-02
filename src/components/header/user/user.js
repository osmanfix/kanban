import css from './user.module.css'
import userAvatar from './avatar.png'
import arrow from './arrow.svg'
import arrow1 from './arrow1.png'
import { useState } from 'react';

function User() {
    const [visible, setMenu] = useState(false)

    const menu = () => {
        setMenu(!visible)
    }

    return (
        <div className={css.user}>
        <img src={userAvatar} className={css.imgAvatar} alt="avatar"  />
        <button className={css.buttonUserMenu} onClick={menu}>
            {visible ? <img src={arrow1} alt="avatar"  /> : <img src={arrow} alt="avatar" />}
         </button>

         {visible && (
            <div className={css.userMenu}>
                <a href='/' className={css.userLink}>Profile</a>
                <a href='/' className={css.userLink}>Log Out</a>
            </div>
         )}
        </div>
    )
}

export default User;