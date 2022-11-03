import css from "./Transaction.module.css";
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionhistory} >
            <thead className={css.transactionHeder}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactioBody}>
                {items.map(({ type, amount, currency, id }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>))}
            </ tbody>
        </table >
    )
}



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};