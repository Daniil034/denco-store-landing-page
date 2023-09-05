import styles from './Input.module.scss';
import {ComponentProps} from "react";

type Props = ComponentProps<'input'>;

export function Input(props: Props) {
    return (
        <input className={styles.root} {...props}/>
    );
};
