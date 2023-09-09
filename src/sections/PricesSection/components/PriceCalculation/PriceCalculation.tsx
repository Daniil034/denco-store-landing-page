import {useEffect, useState} from "react";
import calculationImg from 'shared/assets/images/calculation.png';
import styles from './PriceCalculation.module.scss';
import {Button} from "../../../../shared/ui/Button/Button";
import {FinalPrice} from "../FinalPrice/FinalPrice";
import {useFormData} from "../../lib/useFormData";

export function PriceCalculation() {
    const {toggles, inputs, formData} = useFormData();
    const [finalPriceValue, setFinalPriceValue] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let requestFormData = new FormData();
        Object.entries(formData.inputs).forEach(([key, value]) => {
            requestFormData.append(key, value);
        })
        Object.entries(formData.toggles.main).forEach(([key, value]) => {
            requestFormData.append(key, Number(value.value).toString());
        })
        Object.entries(formData.toggles.subtoggles).forEach(([key, value]) => {
            requestFormData.append(key, Number(value.value).toString());
        })

        fetch("https://denco.store/assets/fulfillmentsettings/calc.php", {
            method: "POST",
            body: requestFormData,
            mode: "cors"
        }).then(response => {
            response.json().then(jsonResponse => {
                setFinalPriceValue(Number(jsonResponse.totalPrice) || 0);
            })
        })
    }

    useEffect(() => {
        setFinalPriceValue(0);
    }, [formData]);
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
                        <a href="https://disk.yandex.ru/i/QPfIgSFMFJeuUg" className={styles.link}>Полный пакет услуг</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

