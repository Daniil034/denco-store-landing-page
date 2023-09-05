import Slider from "react-slick";
import {ComponentProps} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainPage from 'shared/assets/images/mainPage.png';
import ordersPage from 'shared/assets/images/ordersPage.png';
import itemsPage from 'shared/assets/images/itemsPage.png';
import tablePage from 'shared/assets/images/tablePage.png';
import statisticsPage from 'shared/assets/images/statisticsPage.png';
import pricesPage from 'shared/assets/images/pricesPage.png';
import accountBalancePage from 'shared/assets/images/accountBalancePage.png';
import {ReactComponent as SliderArrowLeft} from "shared/assets/icons/sliderArrowLeft.svg";
import {ReactComponent as SliderArrowRight} from "shared/assets/icons/sliderArrowRight.svg";
import styles from './CarouselSection.module.scss';
import {Container} from "../../shared/ui/Container/Container";

export function CarouselSection() {
    const settings: ComponentProps<typeof Slider> = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        prevArrow: <SliderArrowLeft/>,
        nextArrow: <SliderArrowRight/>
    }

    return (
        <section>
            <span className={styles.anchor} id="personalAccount"></span>
            <Container>
                <div className={styles.container}>
                    <h2 className={styles.title}>Личный кабинет</h2>
                    <Slider {...settings}>
                        <figure>
                            <img src={mainPage} alt="Главная страница админ панели"/>
                            <figcaption className={styles.figcaption}>Главная</figcaption>
                        </figure>
                        <figure>
                            <img src={ordersPage} alt="Страница заказов"/>
                            <figcaption className={styles.figcaption}>Заказы</figcaption>
                        </figure>
                        <figure>
                            <img src={itemsPage} alt="Страница товаров пользователя"/>
                            <figcaption className={styles.figcaption}>Товары</figcaption>
                        </figure>
                        <figure>
                            <img src={tablePage} alt="Страница всех товаров"/>
                            <figcaption className={styles.figcaption}>Таблица</figcaption>
                        </figure>
                        <figure>
                            <img src={statisticsPage} alt="Страница статистики продаж"/>
                            <figcaption className={styles.figcaption}>Статистика</figcaption>
                        </figure>
                        <figure>
                            <img src={pricesPage} alt="Страница применения цен"/>
                            <figcaption className={styles.figcaption}>Цены</figcaption>
                        </figure>
                        <figure>
                            <img src={accountBalancePage} alt="Страница баланса аккаунта"/>
                            <figcaption className={styles.figcaption}>Баланс</figcaption>
                        </figure>
                    </Slider>
                </div>
            </Container>
        </section>
    );
};
