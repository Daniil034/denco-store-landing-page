import styles from './ServiceItem.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

export type ServiceItemProps = {
    img: {
        source: string,
        alt?: string
    },
    title: string,
    bulletPoints: string[],
    connectionLine?: ReactNode,
    itemClassNames?: {
        root?: string,
        img?: string,
        list?: string
    },
};

export function ServiceItem(props: ServiceItemProps) {
    const {img, bulletPoints, title, itemClassNames, connectionLine} = props;

    return (
        <div className={classNames(styles.root, itemClassNames?.root)}>
            <img src={img.source} alt={img.alt} className={itemClassNames?.img}/>
            <h3 className={styles.title}>{title}</h3>
            <ul className={classNames(styles.list, itemClassNames?.list)}>
                {bulletPoints.map((item, index) => <li key={index} className={styles.listItem}><span>{item}</span>
                </li>)}
            </ul>
            {connectionLine}
        </div>
    );
};
