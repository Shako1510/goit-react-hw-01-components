import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FrendListItem from 'components/frendListItem/FrendListItem';

export default function FriendList({ friends }) {

    return (
        < div className={css.friendsSections}>
            <ul className={css.friendList}>
                {friends.map(({ name, avatar, isOnline, id }) => (

                    <FrendListItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline} />

                ))}
            </ul>
        </ div >
    );
};


// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//         })
//     ),
// };
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