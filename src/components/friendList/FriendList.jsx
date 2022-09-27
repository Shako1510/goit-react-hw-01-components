import PropTypes from 'prop-types';
import css from './FriendList.module.css'


export default function FriendList({ friends }) {

    return (
        < div className={css.friendsSections}>

            <ul className={css.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.itemFriend} key={id} >
                        <span className={css.statusOnline}>{isOnline}</span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>))},
            </ul>

        </ div>
    );
};

FriendList.propTypes = {

    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};