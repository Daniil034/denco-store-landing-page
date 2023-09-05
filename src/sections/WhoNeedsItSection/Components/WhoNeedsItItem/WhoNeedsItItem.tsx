import styles from './WhoNeedsItItem.module.scss';

export type WhoNeedsItItemProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    title: string,
    body: string,
    padding?: number,
    className?: string,
};

export function WhoNeedsItItem(props: WhoNeedsItItemProps) {
    const {Icon, body, title, padding = 26} = props;

    return (
        <li className={styles.root} style={{paddingLeft: padding, paddingRight: padding}}>
            <Icon className={styles.icon}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
        </li>
    );
};
