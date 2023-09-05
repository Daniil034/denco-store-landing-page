import boxIcon from 'shared/assets/icons/boxIcon.png'
import truckIcon2 from 'shared/assets/icons/truckIcon2.png'
import styles from './WhyChooseUsSection.module.scss';
import {WHY_CHOOSE_US_ITEMS} from "./config";
import {WhyChooseUsItem} from "./components/WhyChooseUsItem/WhyChooseUsItem";
import {Container} from "../../shared/ui/Container/Container";

export function WhyChooseUsSection() {
    return (
        <section>
            <div className={styles.header}>
                <img className={styles.box1} src={boxIcon}/>
                <img className={styles.box2} src={boxIcon}/>
                <img className={styles.box3} src={boxIcon}/>
                <img className={styles.box4} src={boxIcon}/>
                <img className={styles.box5} src={boxIcon}/>
                <h3>Почему мы?</h3>
                <img className={styles.truck} src={truckIcon2}/>
            </div>
            <Container>
                <div className={styles.advantages}>
                    {WHY_CHOOSE_US_ITEMS.map(item => (
                        <WhyChooseUsItem
                            key={item.title}
                            Icon={item.Icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
