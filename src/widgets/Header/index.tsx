import { ComponentPropsWithoutRef, FC } from "react";
import { Button } from "shared/ui/";
import clsx from "clsx";
import styles from './Header.module.scss';
import Menu from "./components/Menu";
import ThemeToggle from "./components/Menu/ThemeToggle";
import DropMenu from "shared/ui/DropMenu";


export interface HeaderProps extends ComponentPropsWithoutRef<'header'> { }


const Header: FC<HeaderProps> = ({ className, children, ...props }) => {
    const classes = clsx(
        className,
        styles.root,
    );

    return (
        <header className={classes} {...props}>
            <span className={styles.toolbar}>
                <DropMenu
                    icon={
                        <Button 
                            style={{
                                width: '110px'
                            }}>
                                account
                        </Button>
                    }
                >
                    <Button component='a' to='login'>login</Button>
                    <Button component='a' to='registration'>registration</Button>
                </DropMenu>
                <DropMenu
                    icon={
                        <Button 
                            style={{
                                width: '110px'
                            }}>
                                navigation
                        </Button>
                    }
                >
                    <Button component='a' to='minesweeper'>minesweeper</Button>
                    <Button component='a' to='players_list'>playes</Button>
                </DropMenu>
            </span>
            <span className={styles.toolbar}>
                <ThemeToggle />
                <Menu />
            </span>
        </header>
    );
}


export default Header;