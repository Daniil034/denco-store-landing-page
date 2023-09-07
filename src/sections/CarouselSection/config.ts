import mainPage from 'shared/assets/images/mainPage.png';
import ordersPage from 'shared/assets/images/ordersPage.png';
import itemsPage from 'shared/assets/images/itemsPage.png';
import tablePage from 'shared/assets/images/tablePage.png';
import statisticsPage from 'shared/assets/images/statisticsPage.png';
import pricesPage from 'shared/assets/images/pricesPage.png';
import accountBalancePage from 'shared/assets/images/accountBalancePage.png';

type SliderElementProps = {
    src: string,
    alt: string,
    label: string,
}

export const SLIDER_ELEMENTS: SliderElementProps[] = [
    {
        src: mainPage,
        alt: 'Главная страница админ панели',
        label: 'Главная'
    },
    {
        src: ordersPage,
        alt: 'Страница заказов',
        label: 'Заказы'
    },
    {
        src: itemsPage,
        alt: 'Страница товаров пользователя',
        label: 'Товары'
    },
    {
        src: tablePage,
        alt: 'Страница всех товаров',
        label: 'Таблица'
    },
    {
        src: statisticsPage,
        alt: 'Страница статистики продаж',
        label: 'Статистика'
    },
    {
        src: pricesPage,
        alt: 'Страница применения цен',
        label: 'Цены'
    },
    {
        src: accountBalancePage,
        alt: 'Страница баланса аккаунта',
        label: 'Баланс'
    }
]
