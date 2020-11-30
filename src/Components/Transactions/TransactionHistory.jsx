import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ items }) {
    return (
      <table className={s.transactionHistory}>
        <thead className={s.head}>
            <tr>
            <th className={s.headTh}>Type</th>
            <th className={s.headTh}>Amount</th>
            <th className={s.headTh}>Currency</th>
            </tr>
        </thead> 
        <tbody className={s.tBody}>
            {items.map(item => (
                <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
            ))}
        </tbody>
        </table>    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}
