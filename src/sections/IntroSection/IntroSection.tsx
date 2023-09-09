import WildberriesLogo from 'shared/assets/icons/wildberriesLogo.png';
import YandexLogo from 'shared/assets/icons/yandexLogo.png';
import OzonLogo from 'shared/assets/icons/ozonLogo.png';
import Background from 'shared/assets/images/introBG.png';
import {Button} from "../../shared/ui/Button/Button";
import styles from './IntroSection.module.scss';
import {Container} from "../../shared/ui/Container/Container";

export function IntroSection() {
    return (
        <section>

            <div className={styles.top}>
                <Container>
                    <h2 className={styles.header}>
                        Фулфилмент для Вашего бизнеса по системе <span className={styles.fboFbs}>FBO</span> и <span
                        className={styles.fboFbs}>FBS</span>
                    </h2>
                    <p className={styles.body}>
                        Возьмём на себя работу по подготовке ваших товаров для поставки на маркетплейсы
                    </p>
                    <div className={styles.marketLogos}>
                        <img className={styles.logo} src={WildberriesLogo} alt="Логотип Wildberries"/>
                        <img className={styles.logo} src={YandexLogo} alt="Логотип Yandex market"/>
                        <img className={styles.logo} src={OzonLogo} alt="Логотип Ozon"/>
                    </div>
                    <a href={"https://t.me/dencofulfillmant_manager"}>

                        <Button paddingSize="big" className={styles.button}>Стать клиентом</Button>
                    </a>

                    <img src={Background} className={styles.background}/>
                </Container>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomContainer}>
                    <p>
                        DENCO интегрируется с вашим личным кабинетом на Wildberries, OZON, Яндекс.Маркет по системе
                        FBS
                        (со
                        склада поставщика). Остатки и цены обновляются автоматически из единого окна. Заказы
                        отгружаются
                        без
                        вашего участия. Fulfillment полного цикла.
                    </p>
                </div>
            </div>
        </section>
    );
};
