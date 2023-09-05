import {PriceDescription} from "./components/PriceDescription/PriceDescription";
import {PriceCalculation} from "./components/PriceCalculation/PriceCalculation";
import styles from './PricesSection.module.scss'
import {Container} from "../../shared/ui/Container/Container";

export function PricesSection() {
    return (
        <div className={styles.root}>
            <Container>
                <PriceDescription/>
                <PriceCalculation/>
            </Container>
        </div>
    );
};
