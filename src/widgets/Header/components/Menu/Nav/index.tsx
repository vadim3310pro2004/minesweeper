import { ComponentPropsWithoutRef, FC } from "react";
import gitHubIcon from 'shared/assets/github.svg';
import telegramIcon from 'shared/assets/telegram.svg';
import instagramIcon from 'shared/assets/instagram.svg';
import styles from './Nav.module.scss';
import clsx from "clsx";
import { ReactSVG } from "react-svg";


export interface NavProps extends ComponentPropsWithoutRef<'nav'> {
}


const Nav: FC<NavProps> = ({ className, ...props }) => {
    const classes = clsx(
        styles.root,
        className,
    )

    return (
        <nav className={classes} {...props}>
            <h2 className={styles.nav__item}>contact me</h2>
            <ul className={styles.nav__item}>
                <li>
                    <a href="https://www.instagram.com/vadympsychopath/" target="_blank">
                        <ReactSVG src={instagramIcon} />
                        {/* <img src={instagramIcon} alt="instargram-icon" /> */}
                    </a>
                </li>
                <li>
                    <a href="https://t.me/kkkppip" target="_blank">
                        <ReactSVG src={telegramIcon} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vadim3310pro2004" target="_blank">
                        <ReactSVG src={gitHubIcon} />
                    </a>
                </li>
                <li>
                    <a href="tel:+380674590388">
                        +380 67 459 03 88
                    </a>
                </li>
            </ul>
            <p className={styles.nav__item}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt unde tenetur asperiores quidem ipsum veritatis soluta minima eos qui totam, incidunt accusamus vel neque velit ipsam eaque. Impedit, facilis?
            </p>
        </nav>
    );
}


export default Nav;