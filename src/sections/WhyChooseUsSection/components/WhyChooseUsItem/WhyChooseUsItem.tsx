import styles from './WhyChooseUsItem.module.scss';

export type WhyChooseUsItemProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    title: string,
    description: string,
};

export function WhyChooseUsItem(props: WhyChooseUsItemProps) {
    const {Icon, title, description} = props

    return (
        <div className={styles.root}>
            <Icon className={styles.icon}/>
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};
