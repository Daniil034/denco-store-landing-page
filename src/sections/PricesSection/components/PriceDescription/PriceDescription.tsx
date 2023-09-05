import {ReactComponent as BoxIconColored} from "shared/assets/icons/boxIconColored.svg";
import styles from './PriceDescription.module.scss'
import classNames from "classnames";

export function PriceDescription() {
    return (
        <div className={styles.root}>
            <div className={styles.circle}>
                <h3 className={styles.header}>Стоимость для товара по системе <span
                    className={styles.headerFBS}>FBS</span><span className={styles.headerAsterisk}>*</span></h3>
                <div className={styles.priceBlock}>
                    <p className={styles.price}>45 руб</p>
                    <p className={classNames(styles.includedInPrice, styles.assembling)}>Сборка</p>
                    <p className={classNames(styles.includedInPrice, styles.wrapping)}>Упаковка</p>
                    <p className={classNames(styles.includedInPrice, styles.delivery)}>Доставка до маркетплейса</p>
                </div>
                <div className={styles.boxesLeft}>
                    <BoxIconColored className={classNames(styles.box, styles.box1)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box2)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box3)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box4)}/>
                </div>
                <div className={styles.boxesRight}>
                    <BoxIconColored className={classNames(styles.box, styles.box5)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box6)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box7)}/>
                    <BoxIconColored className={classNames(styles.box, styles.box8)}/>
                </div>
            </div>
            <p className={styles.note}>*При сумме сторон не более 60 см</p>
        </div>
    );
};
