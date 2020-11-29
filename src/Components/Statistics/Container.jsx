import PropTypes from 'prop-types';
import s from './conteiner.module.css';

export default function Container({ title, children}) {
    return <section className={s.statistic}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
        </section>
}

Container.propTypes = {
    title: PropTypes.string,
}

