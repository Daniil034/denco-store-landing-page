import styles from './ToggleBlock.module.scss'

export type ToggleBlockProps = {
    label: string,
    id: string,
    onToggle?: (isChecked: boolean) => void;
    isVisible?: boolean,
};

export function ToggleBlock(props: ToggleBlockProps) {
    const {id, label, onToggle, isVisible = true} = props;

    if (!isVisible) {
        return null;
    }
    return (
        <div className={styles.toggleBlock}>
            <label className={styles.label} htmlFor="wrapping">{label}</label>
            <input className={styles.input} type="checkbox" id={id}
                   onChange={event => onToggle?.(event.target.checked)}/>
            <label className={styles.labelHidden} htmlFor={id}>Toggle</label>
        </div>
    );
};
