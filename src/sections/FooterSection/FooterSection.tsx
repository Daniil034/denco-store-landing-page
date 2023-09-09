import {ReactComponent as DencoLogo} from "shared/assets/icons/dencoLogoFull.svg";
import {ReactComponent as TelegramLogo} from "shared/assets/icons/logoTelegram.svg";
import {ReactComponent as WhatsappLogo} from "shared/assets/icons/logoWhatsapp.svg";
import styles from './FooterSection.module.scss';

export function FooterSection() {
    return (
        <section className={styles.root}>
            <div className={styles.top}>
                <div className={styles.companyInfo}>
                    <DencoLogo className={styles.logo}/>
                    <a href="tel:+79935512602">+7 993 551-26-02</a>
                    <a href="mailto:info@denco.store">info@denco.store</a>
                </div>
                <div className={styles.links}>
                    <a href="https://wa.me/79951541493">
                        <WhatsappLogo className={styles.whatsapp}/>
                    </a>
                    <a href="https://t.me/dencofulfillmant_manager">
                        <TelegramLogo className={styles.telegram}/>
                    </a>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Все права защищены</p>
                <p>© 2017-2023 DENCO</p>
            </div>
        </section>
    );
};
