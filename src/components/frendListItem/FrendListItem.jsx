import PropTypes from 'prop-types';
import css from './FrendListItem.module.css'


export default function FrendListItem({ avatar, name, isOnline }) {

    return (
        <li className={css.itemFriend}  >
            {(isOnline ? <span className={css.statusOnline}>{isOnline}</span> : <span className={css.inline}></span>)}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>

    )
};

FrendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}

