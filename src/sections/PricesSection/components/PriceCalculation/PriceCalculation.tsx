import {useState} from "react";
import calculationImg from 'shared/assets/images/calculation.png';
import styles from './PriceCalculation.module.scss';
import {Button} from "../../../../shared/ui/Button/Button";
import {FinalPrice} from "../FinalPrice/FinalPrice";
import {useFormData} from "../../lib/useFormData";

export function PriceCalculation() {
    const {toggles, inputs, formData} = useFormData();
    const [finalPriceValue, setFinalPriceValue] = useState(0);

    const handleSubmit = () => {
        //     put your code for fetching price here. You can get data from formData
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit}>
                <span id="calculator" className={styles.anchor}/>
                <h3 className={styles.title}>Рассчитать стоимость товара по системе <span
                    className={styles.titleFBO}>FBO</span></h3>
                <div className={styles.body}>
                    <div className={styles.bodyLeft}>
                        <img src={calculationImg} alt="Калькулятор для расчета стоимости"/>
                    </div>
                    <div className={styles.bodyRight}>
                        <p className={styles.dimensionsInfo}>Введите габариты одного товара, его количество и получите
                            расчет тарифов</p>
                        <div className={styles.inputs}>
                            {inputs}
                        </div>
                        <div className={styles.toggles}>
                            {toggles}
                        </div>
                        {finalPriceValue > 0 ? (
                            <FinalPrice price={finalPriceValue}/>
                        ) : (
                            <Button
                                paddingSize="small"
                                className={styles.button}
                                type="submit"
                            >
                                Рассчитать
                            </Button>
                        )}
                        <a href="/" className={styles.link}>Полный пакет услуг</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

