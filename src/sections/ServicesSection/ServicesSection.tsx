import {ServiceItem} from "./Components/ServiceItem/ServiceItem";
import itemReception from "shared/assets/images/itemReception.png";
import itemProcessing from "shared/assets/images/itemProcessing.png";
import itemStorage from "shared/assets/images/itemStorage.png";
import itemDelivery from "shared/assets/images/itemDelivery.png";
import {ReactComponent as ReceptionToProcessingLineMobile} from "shared/assets/icons/receptionToProcessingLine.svg";
import {
    ReactComponent as ReceptionToProcessingLineDesktop
} from "shared/assets/icons/receptionToProcessingLineDesktop.svg";
import {ReactComponent as ProcessingToStorageLineMobile} from "shared/assets/icons/processingToStorageLine.svg";
import {
    ReactComponent as ProcessingToStorageLineDesktop
} from "shared/assets/icons/processingToStorageLineDesktop.svg";
import {ReactComponent as StorageToDeliveryLineMobile} from "shared/assets/icons/storageToDeliveryLine.svg";
import {ReactComponent as StorageToDeliveryLineDesktop} from "shared/assets/icons/storageToDeliveryLineDesktop.svg";
import deliveryGuy from "shared/assets/images/deliveryGuy.png";
import {Container} from "../../shared/ui/Container/Container";
import styles from './ServicesSection.module.scss';

export function ServicesSection() {
    return (
        <section className={styles.root}>
            <span id="services" className={styles.anchor}/>
            <Container>
                <h3 className={styles.title}>Наши услуги</h3>
                <div className={styles.servicesItems}>
                    <ServiceItem
                        itemClassNames={{root: styles.itemReception}}
                        img={{source: itemReception}}
                        title="Приёмка товаров"
                        bulletPoints={[
                            'забор грузов',
                            'идентификация товаров'
                        ]}
                        connectionLine={<ReceptionToProcessingLine
                            mobile={styles.itemReceptionConnectionLineMobile}
                            desktop={styles.itemReceptionConnectionLineDesktop}/>}
                    />
                    <ServiceItem
                        itemClassNames={{root: styles.itemProcessing, list: styles.itemProcessingList}}
                        img={{source: itemProcessing}}
                        title="Обработка товаров"
                        bulletPoints={[
                            'снятие и утилизация обрешетки',
                            'защитная упаковка',
                            'удаление стикеров и этикеток'
                        ]}
                        connectionLine={<ProcessingToStorageLine mobile={styles.itemProcessingConnectionLineMobile}
                                                                 desktop={styles.itemProcessingConnectionLineDesktop}/>}
                    />
                    <ServiceItem
                        itemClassNames={{
                            img: styles.itemStorageImg,
                            root: styles.itemStorage,
                            list: styles.itemStorageList
                        }}
                        img={{source: itemStorage}}
                        title="Инвентаризация и хранение"
                        bulletPoints={[
                            'страхование товара',
                            'хранение объемного товара и поштучно'
                        ]}
                        connectionLine={<StorageToDeliveryLine mobile={styles.itemStorageConnectionLineMobile}
                                                               desktop={styles.itemStorageConnectionLineDesktop}/>}
                    />
                    <ServiceItem
                        itemClassNames={{root: styles.itemDelivery, list: styles.itemDeliveryList}}
                        img={{source: itemDelivery}}
                        title="Отгрузка и доставка"
                        bulletPoints={[
                            'вложение рекламы и информации',
                            'упаковка и комплектация',
                            'отгрузка, доставка в маркетплейсы, службы доставки или пункты приема'
                        ]}
                    />
                </div>
            </Container>
        </section>
    );
};

const ReceptionToProcessingLine = ({mobile, desktop}: { mobile: string, desktop: string }) => {
    return (
        <>
            <ReceptionToProcessingLineMobile className={mobile}/>
            <ReceptionToProcessingLineDesktop className={desktop}/>
            <img className={styles.deliveryGuyImgMobile} src={deliveryGuy} alt="Курьер с посылками"/>
        </>
    )
}

const ProcessingToStorageLine = ({mobile, desktop}: { mobile: string, desktop: string }) => {
    return (
        <>
            <ProcessingToStorageLineMobile className={mobile}/>
            <ProcessingToStorageLineDesktop className={desktop}/>
        </>
    )
}

const StorageToDeliveryLine = ({mobile, desktop}: { mobile: string, desktop: string }) => {
    return (
        <>
            <StorageToDeliveryLineMobile className={mobile}/>
            <StorageToDeliveryLineDesktop className={desktop}/>
            <img className={styles.deliveryGuyImgMobileReverse} src={deliveryGuy} alt="Курьер с посылками"/>
        </>
    )
}
