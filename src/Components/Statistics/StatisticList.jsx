import Statistic from './Statistic';
import PropTypes from 'prop-types';
import s from './statisticList.module.css';

export default function StatisticList({ stats }) {
    return (<ul className={s.statList}>
        {stats.map(stat => (
            <li className={s.item} key={stat.id}>
                <Statistic label={stat.label} percentage={stat.percentage} />
            </li>
        ))}
    </ul>
    );
}

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}
