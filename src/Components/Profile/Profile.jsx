import PropTypes from 'prop-types';
import s from './Profile.module.css'

export default function Profile(props) {
    const { avatar, name, tag, location, stats } = props;
    return <div className={s.profile}>
    <div className={s.description}>
        <img
            src={avatar}
            alt={name}
                className={s.avatar}
                width="100"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
        <li className={s.border}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.border}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.border}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
        </li>
    </ul>
</div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}