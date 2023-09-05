import {WhyChooseUsItemProps} from "./components/WhyChooseUsItem/WhyChooseUsItem";
import {ReactComponent as PcIcon} from "shared/assets/icons/pcIcon.svg"
import {ReactComponent as TruckIcon} from "shared/assets/icons/truckIcon.svg"
import infinityIcon from "shared/assets/icons/infinityIcon.png";
import {ReactComponent as MoneyIcon} from "shared/assets/icons/moneyIcon.svg"


export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItemProps[] = [
    {
        Icon: PcIcon,
        title: 'Личный кабинет',
        description: 'Клиенты могут легко отслеживать свои заказы и управлять ими онлайн.'
    },
    {
        Icon: TruckIcon,
        title: 'Быстрая доставка',
        description: 'Благодаря оптимальному расположению складов и партнерству с логистическими службами.'
    },
    {
        Icon: ({className}: { className?: string }) => <img className={className} src={infinityIcon}/>,
        title: 'Отсутствие ограничений',
        description: 'Мы предлагаем свободу в габаритах товаров для хранения и доставки, обеспечивая максимальное удобство.'
    },
    {
        Icon: MoneyIcon,
        title: 'Выгодные тарифы',
        description: 'У нас конкурентоспособные цены без ущерба качеству обслуживания.'
    }
]
