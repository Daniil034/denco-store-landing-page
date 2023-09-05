import Logo from "shared/assets/icons/logo.svg";
import {ReactComponent as TelegramLogo} from 'shared/assets/icons/logoTelegramRounded.svg';
import styles from './Header.module.scss';
import {useEffect, useRef} from "react";
import {Container} from "../../shared/ui/Container/Container";

const LINKS = [
    {
        label: "Услуги",
        link: "#services"
    },
    {
        label: "Личный кабинет",
        link: "#personalAccount"
    },
    {
        label: "Калькулятор",
        link: "#calculator"
    }
]

export function Header() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const listener = (_: Event) => {
            const scroll = window.scrollY;
            if (!rootRef.current) return;
            if (scroll > 30) {
                rootRef.current.classList.add(styles.rootShadow);
            } else {
                rootRef.current.classList.remove(styles.rootShadow);
            }
        }
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, []);

    return (

        <header ref={rootRef} className={styles.root}>
            <Container className={styles.container}>
                <div className={styles.body}>
                    <a href="/">
                        <img className={styles.logo} src={Logo} alt="Лого"/>
                    </a>
                    <nav className={styles.nav}>
                        <ul className={styles.links}>
                            {LINKS.map(link => (
                                <li key={link.label}>
                                    <a href={link.link}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a href="/">
                        <TelegramLogo className={styles.telegramLogo}/>
                    </a>
                </div>
            </Container>
        </header>

    );
};

