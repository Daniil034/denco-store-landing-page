import styles from './FinalPrice.module.scss';

type Props = {
    price: number
};

export function FinalPrice(props: Props) {
    const {price} = props;

    return (
        <div className={styles.root}>
            <span>{price} руб</span>
        </div>
    );
}
