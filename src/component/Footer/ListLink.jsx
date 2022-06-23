import styles from './Footer.module.css';
import clsx from 'clsx';
import {data} from './data'


export default function ListLink(){
    return (
        <div className={styles.listLink}>
            {data.map((data, index) => (
                <div key={index} className={styles.listLink__col}>
                    <h4 className={styles.listLink__title}>{data.title}</h4>
                    <ul className={styles.listLink__listWrapper}>
                        {data.links.map((link, index) => (
                            <li 
                                key={index}
                                className={clsx(styles.listLink__item, styles.hov)}
                            >
                                <a className={clsx(styles.footer__linkText, styles.hov)}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>   
            ))}
        </div>
    )
}
