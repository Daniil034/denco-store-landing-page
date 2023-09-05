import {useMemo, useState} from "react";
import calculationImg from 'shared/assets/images/calculation.png';
import styles from './PriceCalculation.module.scss';
import {Input} from "../Input/Input";
import {ToggleBlock, ToggleBlockProps} from "../ToggleBlock/ToggleBlock";
import {Button} from "../../../../shared/ui/Button/Button";

export function PriceCalculation() {
    const [isBoxToggleChecked, setIsBoxToggleChecked] = useState(false);

    const toggles = useMemo<ToggleBlockProps[]>(() => [
        {
            label: 'Упаковка',
            id: 'wrapping',
            onToggle: (isChecked) => setIsBoxToggleChecked(isChecked)
        },
        {
            label: 'Дополнительная маркировка',
            id: 'additionalLabel',
            isVisible: isBoxToggleChecked
        },
        {
            label: 'БОПП пакет + упаковка',
            id: 'boppBag',
            isVisible: isBoxToggleChecked
        },
        {
            label: 'Пузырьковая пленка',
            id: 'bubbleMembrane',
            isVisible: isBoxToggleChecked
        },
        {
            label: 'ZIP-LOCK пакет с бегунком упаковка',
            id: 'zipLock',
            isVisible: isBoxToggleChecked
        },
        {
            label: 'Проверка на брак',
            id: 'checking'
        },
        {
            label: 'Сборка в упаковку клиента',
            id: 'clientBox'
        }
    ], [isBoxToggleChecked])

    return (
        <div className={styles.root}>
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
                        <Input placeholder="Длина товара, см"/>
                        <Input placeholder="Ширина товара, см"/>
                        <Input placeholder="Высота товара, см"/>
                        <Input placeholder="Количество товара, шт"/>
                    </div>
                    <div className={styles.toggles}>
                        {toggles.map(toggleItem => (
                            <ToggleBlock
                                key={toggleItem.id}
                                label={toggleItem.label}
                                id={toggleItem.id}
                                onToggle={toggleItem.onToggle}
                                isVisible={toggleItem.isVisible}
                            />
                        ))}
                    </div>
                    <Button paddingSize="small" className={styles.button}>Рассчитать</Button>
                    <a href="/" className={styles.link}>Полный пакет услуг</a>
                </div>
            </div>
        </div>
    );
};

