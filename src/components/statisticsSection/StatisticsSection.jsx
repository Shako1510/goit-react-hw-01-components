import PropTypes from 'prop-types';
import css from './StatisticsSection.module.css'


export default function StatisticsSection({ title, stats }) {

    return (
        < section className={css.sections}>

            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={css.item} key={id} >
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>))},
            </ul>

        </ section>
    );
};

StatisticsSection.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

// const GetRandomColor = function () {
//     return '#' + (Math.random() * 0xffffff << 0).toString(16);
// }



// export default function StatisticsSection({ title, children }) {
//     return (
//         <section className={css.titleSection}>
//             <h2 className={css.title}>{title}</h2>
//             {children}
//         </section>
//     )
// }
