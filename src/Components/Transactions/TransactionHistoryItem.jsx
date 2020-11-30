import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({ id, type, amount, currency }) {
    const typeName = capitalizeFirstLetter(type);
    return (
        <tr className={s.tr} key={id}>
            <td className={s.td}>{typeName}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
        </tr>
    )
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}