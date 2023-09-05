import styles from './WhoNeedsItSection.module.scss';
import {WHO_NEEDS_IT_ITEMS} from "./config";
import {WhoNeedsItItem} from "./Components/WhoNeedsItItem/WhoNeedsItItem";
import {Container} from "../../shared/ui/Container/Container";

export function WhoNeedsItSection() {
    return (
        <section className={styles.root}>
            <Container>
                <ul className={styles.list}>
                    {WHO_NEEDS_IT_ITEMS.map(item => (
                        <WhoNeedsItItem
                            key={item.title}
                            Icon={item.Icon}
                            title={item.title}
                            body={item.body}
                            padding={item.padding}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

