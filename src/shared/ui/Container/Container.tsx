import {ReactNode} from "react";
import styles from './Container.module.scss';
import classNames from "classnames";

type Props = {
    children: ReactNode,
    className?: string
};

export function Container(props: Props) {
    const {children, className} = props;
    return (
        <div className={classNames(styles.root, className)}>
            {children}
        </div>
    );
};
