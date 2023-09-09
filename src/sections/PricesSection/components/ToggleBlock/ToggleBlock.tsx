import styles from './ToggleBlock.module.scss'
import {isVisible} from "@testing-library/user-event/dist/utils";

export type ToggleBlockProps = {
    label: string,
    id: string,
    onToggle?: (isChecked: boolean) => void,
    checked?: boolean,
    subToggles?: ToggleBlockProps[],
    subtogglesVisible?: boolean,
};

export function ToggleBlock(props: ToggleBlockProps) {
    const {id, label, onToggle, checked, subtogglesVisible = false, subToggles} = props;

    if (!isVisible) {
        return null;
    }
    return (
        <div>
            <div className={styles.main}>
                <label className={styles.label} htmlFor="wrapping">{label}</label>
                <input checked={checked} className={styles.input} type="checkbox" id={id}
                       onChange={event => onToggle?.(event.target.checked)}/>
                <label className={styles.labelHidden} htmlFor={id}>Toggle</label>
            </div>
            {subtogglesVisible && (
                <div className={styles.subToggles}>
                    {subToggles?.map(subtoggle => (
                        <ToggleBlock
                            key={subtoggle.id}
                            label={subtoggle.label}
                            id={subtoggle.id}
                            onToggle={subtoggle.onToggle}
                            subToggles={subtoggle.subToggles}
                            checked={subtoggle.checked}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
