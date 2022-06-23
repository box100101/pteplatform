import styles from './Footer.module.css';
import clsx from 'clsx';
import ListLink from './ListLink';

function Footer(){
    return (
        <footer className="footer">
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__container}>
                    <div>
                        <span>Language: </span>
                        <span className={clsx(styles.footer__lang, styles.hov)}>中文(简体)</span>
                        <span className={clsx(styles.footer__lang, styles.hov)}>English</span>       
                    </div>
                    <div className={styles.footer__divider}></div>
                    <ListLink />
                    <div className={styles.footer__divider}></div>
                    <div style={{display: 'flex'}}>
                        <div className={styles.footer__infor}>
                            <p className={styles.clearTagP}>Shenzhen APEUni Education Technology Co., Ltd.</p>
                            <p className={styles.clearTagP}>
                                <a className={clsx(styles.footer__linkText, styles.hov)} href="./">深圳猩宇宙教育科技有限公司   粤ICP备 18035327号</a>
                            </p>
                            <p className={styles.clearTagP}>Copyright@2021 APEUni Edu</p>
                            <p className={styles.clearTagP}>Shenzhen APEUni Education Technology Co., Ltd.</p>
                            <p className={styles.clearTagP}>
                                <a className={clsx(styles.footer__linkText, styles.hov)} href="./">Terms of use</a>
                                <span style={{margin: '0 6px'}}>|</span>
                                <a className={clsx(styles.footer__linkText, styles.hov)} href="./">Privacy Policy</a>
                            </p>
                            <div className={styles.footer__groupIcon}>
                                <a className={styles.footer__brandIcon} href='/'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a className={styles.footer__brandIcon} href='/'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a className={styles.footer__brandIcon} href='/'>
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                                <a className={styles.footer__brandIcon} href='/'>
                                    <i className="fa-brands fa-weibo"></i>
                                </a>
                                <a className={styles.footer__brandIcon} href='/'>
                                    <i className="fa-brands fa-zhihu"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.footer__appDownload}>
                            <div className={styles.footer__QR}>
                                <img className={styles.footer__QRImg} src="https://cdn.apeuni.com/public/web_all/next/_next/static/images/footer-qrcode-ios-b355eb47f4e3591bd33fdc0e40120a36.png"/>
                                <span className={styles.footer__QRTitle}>APEUni iOS App</span>
                            </div>
                            <div className={styles.footer__QR}>
                                <img className={styles.footer__QRImg} src="https://cdn.apeuni.com/public/web_all/next/_next/static/images/footer-qrcode-ios-b355eb47f4e3591bd33fdc0e40120a36.png"/>
                                <span className={styles.footer__QRTitle}>APEUni Android App</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;