import {ReactNode} from "react";
import styles from './Button.module.scss';
import classNames from "classnames";

type Props = {
    children: ReactNode,
    className?: string,
    paddingSize?: 'small' | 'big'
}

export function Button(props: Props) {
    const {children, className, paddingSize = 'small'} = props;


    return (
        <button
            type="button"
            className={classNames(styles.root, {
                    [styles.paddingSmall]: paddingSize === 'small',
                    [styles.paddingBig]: paddingSize === 'big'
                },
                className
            )}>
            {children}
        </button>
    );
};
