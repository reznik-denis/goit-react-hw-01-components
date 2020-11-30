import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistic({ label, percentage }) {
    return <div>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
    </div>
};

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};