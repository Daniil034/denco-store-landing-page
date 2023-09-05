import {WhoNeedsItItemProps} from "./Components/WhoNeedsItItem/WhoNeedsItItem";
import {ReactComponent as OnePersonIcon} from "shared/assets/icons/onePersonIcon.svg";
import {ReactComponent as ThreePersonsIcon} from "shared/assets/icons/threePersonsIcon.svg";
import {ReactComponent as FactoryIcon} from "shared/assets/icons/factoryIcon.svg";


export const WHO_NEEDS_IT_ITEMS: WhoNeedsItItemProps[] = [
    {
        Icon: OnePersonIcon,
        title: 'Селлерам',
        body: "Для продавцов с одной или несколькими категориями товаров",
        padding: 44
    },
    {
        Icon: ThreePersonsIcon,
        title: "Торговым компаниям",
        body: 'Для компаний с большим ассортиментом товаров для продажи на маркетплейсах',
        padding: 26
    },
    {
        Icon: FactoryIcon,
        title: 'Производителям',
        body: 'Для бизнеса с собственным производством, развивающим продажи на маркетплейсах',
        padding: 30
    }
]
