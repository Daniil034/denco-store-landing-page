import Slider from "react-slick";
import {ComponentProps, ReactElement, ReactNode, useState} from "react";
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
import {SLIDER_ELEMENTS} from "./config";
import {Modal} from "./components/Modal/Modal";

const settings: ComponentProps<typeof Slider> = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    prevArrow: <SliderArrowLeft/>,
    nextArrow: <SliderArrowRight/>
}

export function CarouselSection() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    console.log(selectedImageIndex)

    const handleImageClick = (imageIndex: number) => {
        setSelectedImageIndex(imageIndex);
    }

    return (
        <section>
            <span className={styles.anchor} id="personalAccount"></span>
            <Container>
                <div className={styles.container}>
                    <h2 className={styles.title}>Личный кабинет</h2>
                    <Slider {...settings}>
                        {SLIDER_ELEMENTS.map((sliderElement, index) => (
                            <figure>
                                <img className={styles.image} src={sliderElement.src} alt={sliderElement.alt}
                                     onClick={() => handleImageClick(index)}/>
                                <figcaption className={styles.figcaption}>{sliderElement.label}</figcaption>
                            </figure>
                        ))}
                    </Slider>
                </div>
                {selectedImageIndex !== null && (
                    <Modal onClose={() => setSelectedImageIndex(null)}>
                        <img className={styles.imageOpen} src={SLIDER_ELEMENTS[selectedImageIndex].src}
                             alt={SLIDER_ELEMENTS[selectedImageIndex].alt}/>
                    </Modal>
                )}
            </Container>
        </section>
    );
}
