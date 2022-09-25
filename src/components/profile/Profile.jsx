import React from "react"
import css from './Profile.module.css'
import PropTypes from 'prop-types'

export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
    return (
        <div className={css.profile} >
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className={css.name}>{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div >
    )
};


Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}